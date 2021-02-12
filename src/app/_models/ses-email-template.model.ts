export class SESEmailTemplate {
    Content: {
        Simple: {
            Body: {
                // Html: {
                //     Data: string
                // },
                Text: {
                    Data: string
                }
            },
            Subject: {
                Data: string
            }
        },
        Destination: {
           ToAddresses: Array<string>
        }
    }

    constructor(subject: string, data: any) {
        this.Content = {
            Simple: {
                Body: {
                    Text: {
                        Data: ''
                    }
                },
                Subject: {
                    Data: ''
                }
            },
            Destination: {
               ToAddresses: []
            }
        }
        this.Content.Simple.Subject.Data = subject;
        this.Content.Simple.Body.Text.Data = JSON.stringify(data);
        this.Content.Destination.ToAddresses = ['itsplash@splash4pool.com'];
    }

    // {
    //     "Content": {
    //        "Simple": {
    //           "Body": {
    //              "Html": {
    //                 "Charset": "string",
    //                 "Data": "string"
    //              },
    //              "Text": {
    //                 "Charset": "string",
    //                 "Data": "string"
    //              }
    //           },
    //           "Subject": {
    //              "Charset": "string",
    //              "Data": "string"
    //           }
    //        }
    //     },
    //     "Destination": {
    //        "ToAddresses": [ "string" ]
    //     }
    //  }
}