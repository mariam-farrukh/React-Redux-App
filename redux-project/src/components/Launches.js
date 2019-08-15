import React from 'react'
import Launch from './Launch.js'
import {connect} from 'react-redux';
import { getData, getPastData } from '../store/actions';
import Loader from 'react-loader-spinner';
import { Button } from './StyledLaunch';

const Launches = props => {
    return(
        <>
            <h1>Launches</h1>
            <Button onClick={props.getPastData}>
                {props.isLoading ? (
                <Loader type="Rings" color="#00BFFF" height={40} width={120} />
                ) : (
                'See Past Launches'
                )}
            </Button>
            <Button onClick={props.getData}>
                {props.isLoading ? (
                <Loader type="Rings" color="#00BFFF" height={40} width={120} />
                ) : (
                'See Upcoming Launches'
                )}
            </Button>
            {props.launches.map(launch => {
                    return(
                        <Launch key={launch.mission_name} launch={launch} />
                    )
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
      launches: state.launches,
      isLoading: state.isLoading
    }
};
  
export default connect(mapStateToProps, {getData, getPastData})(Launches);