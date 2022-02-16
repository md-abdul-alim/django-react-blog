import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Form, SearchCard } from './components'
import Grid from "@material-ui/core/Grid";
import SearchCards from './searchCards'

export default function Search(){

    const [query, setQuery] = useState('')
    const [solutions, setSolutions] = useState([]);

    const searchSolutions = async (e) =>{
        e.preventDefault()
        // const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        const url = 'http://127.0.0.1:8000/api/qna/list/';
        try{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setSolutions(data)
        }catch(err){
            console.error(err);
        }
    }
    // console.log(solutions)
    console.log("solutions")
    

    return(
        <> 
            <Form>
                <Form.Base onSubmit={searchSolutions}>
                    <Grid container spacing={1}>
                        <Grid item xl={10} lg={9} md={9} sm={10} xs={12}>
                            <Form.Input
                                placeholder = "Search your solutions"
                                value = {query}
                                onChange = {( e ) => setQuery(e.target.value)}
                            />
                        </Grid>
                        <Grid item xl={2} lg={3} md={3} sm={2} xs={12}>
                            <Form.Submit type='submit'>
                                Submit
                            </Form.Submit>
                        </Grid>
                    </Grid>                   
                </Form.Base>
            </Form>
            <SearchCard>
                {/* {solutions.filter(solution => solution.question).map(solution => (
                    <SearchCards solution={solution} key={solution.id}/>
                ))} */}
                    {/* <SearchCards solution={solution} key={solution.id}/> */}
                <SearchCards solutions={solutions}/>
            </SearchCard>
        </>
    )
}