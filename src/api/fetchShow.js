import axios from "axios";

//I first did a custom hook

/*export const useFetch = () => {*/
    /*const [show, setShow] = useState(null);
    const [seasons, setSeasons] = useState([]);*/
    
export const fetchShow = () => {
    return axios
        .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
        /*setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));*/
        return res;
        });
    };
        
    /*return [fetchShow, show, seasons];
}*/

