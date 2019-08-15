import React from 'react'
import Launch from './Launch.js'
import {connect} from 'react-redux';
import { getData } from '../store/actions';
import Loader from 'react-loader-spinner';

const Launches = props => {
    return(
        <>
            <h2>Upcoming Launches</h2>
            <button onClick={props.getData}>
                {props.isLoading ? (
                <Loader type="Rings" color="#00BFFF" height="15" width="100" />
                ) : (
                'Get Upcoming Launches'
                )}
            </button>
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
  
export default connect(mapStateToProps, {getData})(Launches);