"use client";


const useInternetHandler = () => {
     const d = new Date();
     let year = d.getFullYear();
  
     const createData = (item: any) => {
          var summaryData = {
               logo: item?.featuredImage.node.mediaItemUrl,
               provider: item?.title,
               type: 'internet',
               mobileNo: item?.providersInfo?.proPhone,
               slug: item?.slug,
               speed: item?.providersInfo.servicesInfo.internetServices?.speed,
               summery: item?.providersInfo.servicesInfo.internetServices.features,
               price: item?.providersInfo.servicesInfo.internetServices.price,
          }
          return summaryData
     }

     // find top provider base on internet speed 
     const topProvider = (allProviders: any) => {
          function findProviderWithMaxSpeed(arr:any) {
               if (arr?.length === 0) {
                 return null; // Return null for an empty array
               }
               
               let maxSpeedObject = null;
               let maxSpeed = -Infinity; // Start with a very low speed
             
               arr?.forEach((provider:any) => {
                 if (
                   provider.providersInfo &&
                   provider.providersInfo.servicesInfo &&
                   provider.providersInfo.servicesInfo.internetServices
                 ) {
                   const currentSpeed = parseInt(provider.providersInfo.servicesInfo.internetServices.speed?.split('-')[1]);
                   if (!isNaN(currentSpeed) && currentSpeed > maxSpeed) {
                     maxSpeed = currentSpeed; // Update the maximum speed
                     maxSpeedObject = provider; // Update the object with the highest speed
                   }
                 }
               });
             
               return maxSpeedObject;
             }
             
             let providerWithMaxSpeed = findProviderWithMaxSpeed(allProviders);

          return providerWithMaxSpeed
     }

     return {
          year, type: 'internet' , createData, topProvider
     }
}

export default useInternetHandler
