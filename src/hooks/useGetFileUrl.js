export default function useGetFileUrl() {
  const getUrl = (event) => {
    // event.preventDefault();
    let files;
    if (event.dataTransfer) {
      files = event.dataTransfer.files;
    } else if (event.target) {
      files = event.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      return reader.result;
    };
    reader.readAsDataURL(files[0]);
  }
  return { getUrl };
}
