import React, { useEffect, useState } from "react";
import { useStat } from "./useStat";
import axios from "axios"
export const NewWord = () =>{
    const {profile} = useStat()    

    const [palabras, setPalabras] = useState({
        email: "",
        palabra: "",
        word: ""
    })    
useEffect(() => {
if(profile) setPalabras({...palabras, email: profile.email})
}, [profile])

    const changeInput = (e) =>{
        setPalabras({...palabras,
            [e.target.name]: e.target.value,})
    }
    const agregar = async () =>{
        try{
        await axios.put("http://localhost:8080/ingles", {
            email: profile?.email,
            palabra: palabras.palabra,
            word: palabras.word
          })
        .then((scces) =>  setPalabras({
            palabra: "",
            word: ""  
        }) )
    }
    catch(err){
        console.log(err)
    }
    }

    return(
        <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div>
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Agrega nuevas palabras</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" onChange={(e) => changeInput(e)} value ={palabras.palabra} id="ingles" name="palabra" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Palabra en español</label>
						</div>
						<div class="relative">
							<input autocomplete="off"  onChange={(e) => changeInput(e)} value ={palabras.word} id="ingles" name="word" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Palabra en ingles</label>
						</div>
						<div class="relative">
							<button onClick={() => agregar()} class="bg-blue-500 text-white rounded-md px-2 py-1">agregar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}