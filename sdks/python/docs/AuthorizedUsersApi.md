# unit_finance_sdk.AuthorizedUsersApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_authorized_users**](AuthorizedUsersApi.md#add_authorized_users) | **POST** /customers/{customerId}/authorized-users | Add authorized users
[**get_authorized_user**](AuthorizedUsersApi.md#get_authorized_user) | **GET** /customers/{customerId}/authorized-users/{authorizedUserId} | Get an authorized user
[**list_authorized_users**](AuthorizedUsersApi.md#list_authorized_users) | **GET** /customers/{customerId}/authorized-users | List authorized users
[**remove_authorized_users**](AuthorizedUsersApi.md#remove_authorized_users) | **DELETE** /customers/{customerId}/authorized-users | Remove authorized users


# **add_authorized_users**
> UpdateCustomer200Response add_authorized_users(customer_id, add_authorized_users_request)

Add authorized users

Add authorized users for a customer. The Customer Update webhook event will be fired.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.add_authorized_users_request import AddAuthorizedUsersRequest
from unit_finance_sdk.models.update_customer200_response import UpdateCustomer200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.AuthorizedUsersApi(api_client)
    customer_id = 'customer_id_example' # str | 
    add_authorized_users_request = unit_finance_sdk.AddAuthorizedUsersRequest() # AddAuthorizedUsersRequest | 

    try:
        # Add authorized users
        api_response = api_instance.add_authorized_users(customer_id, add_authorized_users_request)
        print("The response of AuthorizedUsersApi->add_authorized_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizedUsersApi->add_authorized_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 
 **add_authorized_users_request** | [**AddAuthorizedUsersRequest**](AddAuthorizedUsersRequest.md)|  | 

### Return type

[**UpdateCustomer200Response**](UpdateCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_authorized_user**
> GetAuthorizedUser200Response get_authorized_user(customer_id, authorized_user_id)

Get an authorized user

Get an authorized user resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_authorized_user200_response import GetAuthorizedUser200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.AuthorizedUsersApi(api_client)
    customer_id = 'customer_id_example' # str | 
    authorized_user_id = 'authorized_user_id_example' # str | 

    try:
        # Get an authorized user
        api_response = api_instance.get_authorized_user(customer_id, authorized_user_id)
        print("The response of AuthorizedUsersApi->get_authorized_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizedUsersApi->get_authorized_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 
 **authorized_user_id** | **str**|  | 

### Return type

[**GetAuthorizedUser200Response**](GetAuthorizedUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorized user resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_authorized_users**
> ListAuthorizedUsers200Response list_authorized_users(customer_id, filter_jwt_subject=filter_jwt_subject, filter_phone=filter_phone)

List authorized users

List of authorized user resources. Filtering can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_authorized_users200_response import ListAuthorizedUsers200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.AuthorizedUsersApi(api_client)
    customer_id = 'customer_id_example' # str | 
    filter_jwt_subject = 'filter_jwt_subject_example' # str | Optional. Filter authorized users by JWT subject. (optional)
    filter_phone = 'filter_phone_example' # str | Optional. Filter authorized users by phone. (optional)

    try:
        # List authorized users
        api_response = api_instance.list_authorized_users(customer_id, filter_jwt_subject=filter_jwt_subject, filter_phone=filter_phone)
        print("The response of AuthorizedUsersApi->list_authorized_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizedUsersApi->list_authorized_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 
 **filter_jwt_subject** | **str**| Optional. Filter authorized users by JWT subject. | [optional] 
 **filter_phone** | **str**| Optional. Filter authorized users by phone. | [optional] 

### Return type

[**ListAuthorizedUsers200Response**](ListAuthorizedUsers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of authorized user resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_authorized_users**
> UpdateCustomer200Response remove_authorized_users(customer_id, remove_authorized_users_request)

Remove authorized users

Remove existing authorized users from a customer. The Customer Update webhook event will be fired.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.remove_authorized_users_request import RemoveAuthorizedUsersRequest
from unit_finance_sdk.models.update_customer200_response import UpdateCustomer200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.AuthorizedUsersApi(api_client)
    customer_id = 'customer_id_example' # str | 
    remove_authorized_users_request = unit_finance_sdk.RemoveAuthorizedUsersRequest() # RemoveAuthorizedUsersRequest | 

    try:
        # Remove authorized users
        api_response = api_instance.remove_authorized_users(customer_id, remove_authorized_users_request)
        print("The response of AuthorizedUsersApi->remove_authorized_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizedUsersApi->remove_authorized_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 
 **remove_authorized_users_request** | [**RemoveAuthorizedUsersRequest**](RemoveAuthorizedUsersRequest.md)|  | 

### Return type

[**UpdateCustomer200Response**](UpdateCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

