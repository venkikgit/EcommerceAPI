# EcommerceAPI

Clone this API using the below command

git clone https://github.com/venkikgit/EcommerceAPI/

Install all dependancies

First Start the depencancies

Open POSTMAN API

First create the session by acessing http://localhost:8000/users/create-session . Token Will be generated.

We should use that token to create, update and delete any product.

For acessing all products list ---> GET METHOD http://localhost:8000/products (Token not required)

For adding new product to the list ----> POST Method http://localhost:8000/products/create (Token is required)

For Deleting the product from the list --> DELETE Method http://localhost:8000/products/{_id} ( _id means product id and Token is required ) 

For updating the product QTY of the Specific product --> PATCH Method http://localhost:8000/products/{_id}/update_quantity/?number={value} ( _id means product id and Token is required ) 


Thanks

