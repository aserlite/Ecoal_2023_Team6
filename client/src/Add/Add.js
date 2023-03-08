import './Add.css'

function Add() {

    return (
        <form action="" method="get" class="form">
            <div class="form-div">
                <label for="title">Title: </label>
                <input type="text" name="title" id="title" required></input>
            </div>
            <div class="form-div">
                <label for="content">Content: </label>
                <textarea name="content" id="content" required></textarea>
            </div>
            <div class="form-div">
                <label for="image">Image:</label>
                <input type="file" name="image" id="image" alt='thumbnail'></input>
            </div>
            <div class="form-div">
                <input type="submit" value="Send article"></input>
            </div>

        </form>
    );
}

export default Add;