
async function subscribeMail(email){
    try {
        const response = await fetch('https://uic-email-saving.onrender.com/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          return true;
          // alert('You have been subscribed!');
        }
        else{
          return false;
          // alert('Already Subscribed or Server error!');
        }
      } catch (error) {
        return false;
        // console.error(error);
        // alert('ERROR:'+error);
      }
}

export default subscribeMail
  
