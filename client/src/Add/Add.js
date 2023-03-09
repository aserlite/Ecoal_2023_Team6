import './Add.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Add(props) {
    const navigate = useNavigate();
    const [article,setArticle]=useState("");
    function handleChange(e, label){
        console.log(e.target.value)
        setArticle({...article,[label]: e.target.value })
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(article)
        console.log(props.cookies)
        const response = (await axios.request({
            url: require.resolve("http://localhost:8000/api/addarticle"),
            headers: {Authorization: "Bearer "+props.cookies.td05.access_token}
        },article)).data;
        console.log(response)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-div">
                <label for="title">Title: </label>
                <input type="text" name="title" id="title" required onChange={e => handleChange(e, "title")}></input>
            </div>
            <div className="form-div">
                <label for="content">Content: </label>
                <textarea name="content" id="content" required onChange={e => handleChange(e, "content")}></textarea>
            </div>
            <div className="form-div">
                <input type="file" name="image" id="image" alt='thumbnail'></input>
            </div>
            <div className="form-div">
                <input type="submit" value="Send article"></input>
            </div>

        </form>
    );
}

export default Add;