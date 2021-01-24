import { HttpService } from './http.services';
export class MailService extends HttpService {

	// public sendMail(model: any): Promise<any> {
		
	// 	return this.post(`https://localhost:44309/weatherforecast/SendMail`,model);
	// }

	sendMail = (model: any) => (
		fetch('https://localhost:44309/email/SendMail', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({  
			  To: model.To,
			  From:model.From,
			  Subject: model.Subject,
			  Username: model.Username,
			  Userphone: model.Userphone,
			  Usermessage: model.Usermessage,
			  Useroptions:model.Useroptions }
			  )
		  }).then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.msg) || response.status;
                return Promise.reject(error);
            }
			return data;
        })
        .catch(error => {           
			return error;
        })
  
	)
}

