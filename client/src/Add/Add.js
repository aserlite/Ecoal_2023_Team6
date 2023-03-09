import './Add.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Add(props) {
    const navigate = useNavigate();
    const [article,setArticle]=useState({});
    const [tn,setTN]=useState(false);
    const [media,setMedia]=useState(false);
    function handleChange(e, label){
        console.log(e.target.value)
        setArticle({...article,[label]: e.target.value })
    }

    async function handleSubmit(e){
        e.preventDefault()

        const formData = new FormData();
        formData.append("thumbnail", tn);
        formData.append("media", media);
        formData.append("title", article.title)
        formData.append("content", article.content)
        formData.append("mediatype", article.mediatype)
        const response = (await axios.post("http://127.0.0.1:8000/api/addarticle", formData,
            {
                headers: {
                    Authorization: "Bearer " + props.cookies.td05.access_token,
                    "content-type": "multipart/form-data",
                }
            })).data;
        navigate('/');
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
                <label htmlFor="thumbnail">Post thumbnail </label>
                <input type="file" name="thumbnail" onChange={(e) => setTN(e.target.files[0])} />
            </div>
            <div className="form-div">
                <label htmlFor="media">Post Media </label>
                <input type="file" name="media" onChange={(e) => setMedia(e.target.files[0])} />
                <select name="mediatype" id="mediatype" onChange={e => handleChange(e, "mediatype")}>
                    <option value="">Media Type</option>
                    <option value="image">image</option>
                    <option value="video">video</option>
                    <option value="audio">audio</option>
                </select>

            </div>
            <div className="form-div">
                <input type="submit" value="Send article"></input>
            </div>

        </form>
    );
}

export default Add;