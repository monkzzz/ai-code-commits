
I have no idea how to do it, can someone please help me?

Comment: You need to use an API that provides real-time data for Bitcoin prices. There are many such APIs available, including [Coinbase](https://github.com/coinbase/coinbase-api-docs), [Bitstamp](https://www.bitstamp.net/api/), and [Bittrex](https://bittrex.com/api). Once you have obtained the data, you can use C to parse it and display the current price of Bitcoin.

Comment: @Mike Thanks for your answer! How do I start with that? Do I need to install anything special or just download an API and start coding?

Comment: You will need to sign up for an account with one of the APIs and obtain API keys, which you can then use in your C code. Once you have an API key, you will be able to make requests to the API endpoint using HTTP GET or POST methods. The API will respond with JSON data containing the current price of Bitcoin, which you can then parse in your C code and display it to the user.