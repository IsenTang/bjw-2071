export default function CustomError (error){

   let data = error.response.data;

   console.log(data);
   this.message = data.message;

   this.code = data.code;

   this.details = data.details;
}