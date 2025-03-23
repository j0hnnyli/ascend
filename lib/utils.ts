export async function wait(time : number){
  return await new Promise((resolve) => setTimeout(() => resolve("resolved"), time))
}