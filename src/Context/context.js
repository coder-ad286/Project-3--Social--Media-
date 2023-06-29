import { createContext ,useState,useEffect} from "react";
import postsData from '../Data/posts.json'
import { Navigate, useNavigate } from "react-router-dom";

const context = createContext({});

export const DataProvider =({children})=>{
    const [posts,setPosts]=useState(postsData)
    const Navigate = useNavigate();
    const [input,setInput] =useState({
        tittle :'',
        post:''
    })
    const [editMode,setEditMode]=useState({
        Mode : false,
        id:'',
    })

    //hamdle form submit
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(editMode.Mode){
            
            const editedPost = posts.map((post)=>{
                if(editMode.id===post.id){
                    
                    return{
                        id:editMode.id,
                        tittle:input.tittle,
                        text:input.post,
                        date:Date.now()
                    }
                }
                else{
                    return post
                }
            })
            setPosts(editedPost)
            setEditMode({Mode:false,id:''})
            Navigate('/') 
            setInput({tittle :'',post:''})
        }
        else{
            console.log("entered");
            const id = posts[posts.length-1].id+1
            setPosts([...posts,{id:id,tittle:input.tittle,date:Date.now(),text:input.post}])
            Navigate('/') 
            setInput({tittle :'',post:''})
        }
    }

    const handleInput =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
       
    }

    const handleDelete=(id)=>{
        const afterDeleted = posts.filter((post)=>id!==post.id)
        setPosts(afterDeleted)
        Navigate('/')
    }
    const handleEdit=(post)=>{

        setInput({
            tittle : post.tittle,
            post : post.text,
        })

          setEditMode({
            Mode : true,
            id:post.id
        })
        Navigate('/newpost')
    }
    return(
        <context.Provider value={{
            posts,
            input,
            setInput,
            handleInput,
            handleSubmit,
            editMode,
            setEditMode,
            handleDelete,
            handleEdit
        }}>
            {children}
        </context.Provider>
    )
}

export default context;