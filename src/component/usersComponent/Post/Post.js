const Post = ({post}) => {
    const {id,title,body} = post


    return (
        <div>
            <div>id:{id}</div>
            <hr/>
            <div>title:{title}</div>
            <hr/>
            <div>body:{body}</div>

        </div>
    );
};

export {Post};