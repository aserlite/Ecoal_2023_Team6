import './Add.css'

function Add() {

    return (
        <form action="" method="get" className="form">
            <div className="form-div">
                <label for="title">Title: </label>
                <input type="text" name="title" id="title" required></input>
            </div>
            <div className="form-div">
                <label for="content">Content: </label>
                <textarea name="content" id="content" required></textarea>
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