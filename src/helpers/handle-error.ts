interface ReturnError {
  success: false;
  error: string;
}

export const handleError = (err: string): ReturnError => {
  console.error(`${Date.now().toLocaleString}: Received unexpected error => ${err}`)
  return { success: false, error: err }
}