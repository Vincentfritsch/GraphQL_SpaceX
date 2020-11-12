import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql `
    query GetLaunches {
        launches(limit: 5) {
            launch_date_utc
            launch_success
            rocket {
                rocket_name
            }
            links {
                video_link
            }
            details
        }
    }
`;

function Launches() {
    const {loading, error, data } = useQuery(GET_LAUNCHES);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :</p>

    return data.launches.map(( { launch_date_utc, launch_success, rocket, links, details }, index) => (
        <div key = {index}>
            <p>
                {launch_date_utc} ==> {`${launch_success? "Ok": "Manqué"}` }
            </p>
            <p> {rocket.rocket_name}</p>
            <a href={links.video_link} target="_blank" rel="noreferrer"> Lien YouTube du lancement</a>
            <p>{details}</p>
        </div>
        ));
}

export default Launches;
