

// req are used to get request data same as in expressJs
// req.cookies
// req.query 
// req.body

export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });

    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
    }
}


// Every API Route can export a config object to change the default configuration, which is the following:
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}


/* 

    we can disable bordyParser to get raw-data
        api: {
            bodyParser: false,
        },


    Is the maximum size allowed for the parsed body, in any format supported by bytes,
        bodyParser.sizeLimit



    externalResolver is an explicit flag that tells
    the server that this route is being handled by
    an exrnal resolver like express or connect.
    Enabling this option disables warnings for unresolved requests.

        api: {
            externalResolver: true,
        },
    
*/


/* 

        Response: 
        !) res.redirect(statusCode,"/path")
        2) res.status(code);
        3) res.send({"key":"value"})
        4) res.json(body)
        
*/