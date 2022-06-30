import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { SAVE_DINING, } from '../utils/mutations';

import Auth from '../utils/auth';
import { searchDining } from '../utils/API';

import { saveDiningIds, getSavedDiningIds } from '../utils/localStorage';
import MapContainer from '../components/MapContainer';

const SearchDining = () => {
    // create state for holding returned google api data
    const [searchedDining, setSearchedDining] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved recipeId values
    const [savedDiningIds, setSavedDiningIds] = useState(getSavedDiningIds());

    const [markedPlaces, setMarkedPlaces] = useState([]);
    const [showMap, setShowMap] = useState(false);
console.log("hello")
    // const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);

    // set up useEffect hook to save `savedRecipeIds` list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    useEffect(() => {
        return () => saveDiningIds(savedDiningIds);
    },[savedDiningIds]
    );
    const [saveDining, { error }] = useMutation(SAVE_DINING);

    // create method to search for Recipes and set state on form submit
    const handleFormSubmit = async (event) => {
        console.log("hello")
        event.preventDefault();
console.log("feet")
        if (!searchInput) {
            return false;
        }

        try {
            const response = await searchDining(searchInput);



            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const items = await response.json();
            console.log(items)
            const diningData = items.results.map((dining) => ({
                // recipeId: recipe.ID
                name: dining.name,
                // authors: recipe.volumeInfo.authors || ['No author to display'],
                // title: recipe.title,
                // // description: recipe.volumeInfo.description,
                // image: recipe.image || '',

            }));

            console.log(response)

            setMarkedPlaces(items.results);
            setShowMap(true);
            // console.log(diningData)

            // setSearchedDining(diningData);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

    // create function to handle saving a Recipe to our database
    const handleSaveDining = async (diningId) => {
        // find the Recipe in `searchedRecipes` state by the matching id
        const diningToSave = searchedDining.find((dining) => dining.diningId === diningId);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log(token)
        if (!token) {
            return false;
        }

        try {
            const response = await saveDining({
                variables: {
                    input: diningToSave
                }
            });

            if (!response) {
                throw new Error("something went wrong!");
            }
            // if Recipe successfully saves to user's account, save Recipe id to state
            setSavedDiningIds([...savedDiningIds, diningToSave.recipeId]);
        } catch (err) {
            console.error(err);
        }
    };


    const loadMap = () => {
        if (showMap && markedPlaces && markedPlaces.length > 0) {
            return <MapContainer markedPlaces={markedPlaces} />
        } else {
            return;
        }
    }


    return (
        <>
            <Jumbotron fluid className='background-img'>
                <Container  >
                    <h1>Search for Vegan-Friendly Restaurants!</h1>
                    <Form onSubmit={handleFormSubmit}>
                     
                        <Form.Row >
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name='searchInput'
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    type='text'
                                    size='lg'
                                    placeholder='Search for a Restaurant'
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type='submit' variant='success' size='lg'>
                                    Submit Search
                                </Button>
                            </Col>
                        </Form.Row>
                    
                    </Form>
                </Container>
            </Jumbotron>

            <Container>
                <h2>
                    {searchedDining.length
                        ? `Viewing ${searchedDining.length} results:`
                        : 'Search for a Restaurant to begin'}
                </h2>
                <CardColumns>
                    {searchedDining.map((dining) => {
                        return (
                            <Card key={dining.name} border='dark'>
                                {dining.image ? (
                                    <Card.Img src={dining.image} alt={`The cover for ${dining.title}`} variant='top' />
                                ) : null}
                                <Card.Body>
                                    <Card.Title>{dining.name}</Card.Title>
                                    <p className='small'>Share </p>
                                    <Card.Text>{dining.description}</Card.Text>
                                    {Auth.loggedIn() && (
                                        <Button
                                            disabled={savedDiningIds?.some((savedDiningId) => savedDiningId === dining.diningId)}
                                            className='btn-block btn-info'
                                            onClick={() => handleSaveDining(dining.diningId)}>
                                            {savedDiningIds?.some((savedDiningId) => savedDiningId === dining.diningId)
                                                ? 'This restaurant has already been saved!'
                                                : 'Save this Restaurant!'}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>
            {loadMap()}
        </>
    );
}

export default SearchDining;