export default defineEventHandler(async event => {
  const basePhotoURL = useRuntimeConfig().basePhotoURL;
  const query = getQuery(event);
  return $fetch(`${basePhotoURL}${query.key}`, {
    method: "GET"
  }).then(response => {
    return response as string;
  });
});
