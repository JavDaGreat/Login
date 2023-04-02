const bcrypt= require('bcrypt')

// const hashPassword= async (pw)=>{
//   const salt = await bcrypt.genSalt(12)
//  const hash= await bcrypt.hash(pw,salt)
//   console.log(salt);
//   console.log(hash);
// }
const hashPassword= async (pw)=>{
  // const salt = await bcrypt.genSalt(12)
 const hash= await bcrypt.hash(pw,12)
  // console.log(salt);
  console.log(hash);
}
const login= async(password,hashedpw)=>{
  const result = await bcrypt.compare(password,hashedpw)
  if(result){
    console.log('success ful login')
    ;
  }else{
    console.log('password wrong');
  }
}
hashPassword('monkey')
// login('monkey!','$2b$12$3XoAvWFFE6l41O/JaboriOS..Q.yTsNcbCjvjKFK/pji1EoXIzQFm')