import React from 'react'
import Launch from './Launch.js'
import {connect} from 'react-redux';
import { getData } from '../store/actions';
import Loader from 'react-loader-spinner';
import { Button } from './StyledLaunch';

const Launches = props => {
    return(
        <>
            <h1>Upcoming Launches</h1>
            {props.launches.map(launch => {
                    return(
                        <Launch key={launch.mission_name} launch={launch} />
                    )
                })}
            <Button onClick={props.getData}>
                {props.isLoading ? (
                <Loader type="Rings" color="#00BFFF" height={30} width={100} />
                ) : (
                'See Upcoming Launches'
                )}
            </Button>

        </>
    )
}

const mapStateToProps = state => {
    return {
      launches: state.launches,
      isLoading: state.isLoading
    }
};
  
export default connect(mapStateToProps, {getData})(Launches);