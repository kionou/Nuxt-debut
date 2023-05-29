// export default defineEventHandler(()=>{
//     return{
//         message:  `bonjour le monde des vivants`
//     }

// })

export default defineEventHandler(async () => {
    const {data} = await  $fetch('https://fakestoreapi.com/products/')
    return {message:data}
});