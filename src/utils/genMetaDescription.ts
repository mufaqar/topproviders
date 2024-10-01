export const genMetaDescription = ({ city, state, type,  providers, zipcode}:any) => {
    const formattedTitles = () => {
      return providers?.map((provider:any, index:number) => `${(index + 1).toString().padStart(2, '0')}- ${provider.title}`).join(', ');
    };
    let description = `Top ${providers?.length} ${type} Service Providers in ${zipcode ? zipcode : ""} ${city ? city : ""}${city ? "," : ""} ${state ? state : ""} are ${formattedTitles()} `;
    // If the description exceeds 155 characters, truncate and add "..." after 152 characters
    if (description.length > 155) {
      description = description.slice(0, 152) + '...';
    }
    return description
  };
  
  export const genFullMetaDescription = ({ city, state, type,  providers, zipcode}:any) => {
    const formattedTitles = () => {
      return providers?.map((provider:any, index:number) => `${(index + 1).toString().padStart(2, '0')}- ${provider.title}`).join(', ');
    };
    let description = `Top ${providers?.length} ${type} Service Providers in ${zipcode ? zipcode : ""} ${city ? city : ""}${city ? "," : ""} ${state ? state : ""} are ${formattedTitles()} `;
    // If the description exceeds 155 characters, truncate and add "..." after 152 characters

    return description
  };