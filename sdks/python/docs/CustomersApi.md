# unit_finance_sdk.CustomersApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archive_customer**](CustomersApi.md#archive_customer) | **POST** /customers/{customerId}/archive | Archive a customer
[**create_business_wallet_customer**](CustomersApi.md#create_business_wallet_customer) | **POST** /customers | Create a business wallet customer
[**get_customer**](CustomersApi.md#get_customer) | **GET** /customers/{customerId} | Get a customer
[**list_customers**](CustomersApi.md#list_customers) | **GET** /customers | List customers
[**update_business_customer_officer**](CustomersApi.md#update_business_customer_officer) | **PATCH** /customers/{customerId}/officers/{officerId} | Update a business customer officer
[**update_customer**](CustomersApi.md#update_customer) | **PATCH** /customers/{customerId} | Update a customer


# **archive_customer**
> UpdateCustomer200Response archive_customer(customer_id, archive_customer_request)

Archive a customer

Archive a customer. The Customer Archived webhook event will be fired.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.archive_customer_request import ArchiveCustomerRequest
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
    api_instance = unit_finance_sdk.CustomersApi(api_client)
    customer_id = 'customer_id_example' # str | 
    archive_customer_request = unit_finance_sdk.ArchiveCustomerRequest() # ArchiveCustomerRequest | 

    try:
        # Archive a customer
        api_response = api_instance.archive_customer(customer_id, archive_customer_request)
        print("The response of CustomersApi->archive_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->archive_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 
 **archive_customer_request** | [**ArchiveCustomerRequest**](ArchiveCustomerRequest.md)|  | 

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
**200** | The archived customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_business_wallet_customer**
> CreateBusinessWalletCustomer201Response create_business_wallet_customer(create_business_wallet_customer_request)

Create a business wallet customer

Create a business wallet customer.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_business_wallet_customer201_response import CreateBusinessWalletCustomer201Response
from unit_finance_sdk.models.create_business_wallet_customer_request import CreateBusinessWalletCustomerRequest
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
    api_instance = unit_finance_sdk.CustomersApi(api_client)
    create_business_wallet_customer_request = unit_finance_sdk.CreateBusinessWalletCustomerRequest() # CreateBusinessWalletCustomerRequest | 

    try:
        # Create a business wallet customer
        api_response = api_instance.create_business_wallet_customer(create_business_wallet_customer_request)
        print("The response of CustomersApi->create_business_wallet_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->create_business_wallet_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_business_wallet_customer_request** | [**CreateBusinessWalletCustomerRequest**](CreateBusinessWalletCustomerRequest.md)|  | 

### Return type

[**CreateBusinessWalletCustomer201Response**](CreateBusinessWalletCustomer201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created business wallet customer resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_customer**
> GetCustomer200Response get_customer(customer_id, include=include)

Get a customer

Get a customer resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_customer200_response import GetCustomer200Response
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
    api_instance = unit_finance_sdk.CustomersApi(api_client)
    customer_id = 'customer_id_example' # str | 
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resource include: authorizedUser. See Getting Related Resources (optional)

    try:
        # Get a customer
        api_response = api_instance.get_customer(customer_id, include=include)
        print("The response of CustomersApi->get_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->get_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resource include: authorizedUser. See Getting Related Resources | [optional] 

### Return type

[**GetCustomer200Response**](GetCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_customers**
> ListCustomers200Response list_customers(page_limit=page_limit, page_offset=page_offset, filter_query=filter_query, filter_email=filter_email, filter_tags=filter_tags, filter_status=filter_status, sort=sort)

List customers

List customer resources. Paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_customers200_response import ListCustomers200Response
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
    api_instance = unit_finance_sdk.CustomersApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_query = 'filter_query_example' # str | Optional. Search term according to the Full-Text Search Rules. (optional)
    filter_email = 'filter_email_example' # str | Optional. Filter customers by email address (case sensitive). (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter Customers by Tags. (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter customers by status (Active, Archived). Usage example: *filter[status][0]=Active (optional)
    sort = '-createdAt' # str | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

    try:
        # List customers
        api_response = api_instance.list_customers(page_limit=page_limit, page_offset=page_offset, filter_query=filter_query, filter_email=filter_email, filter_tags=filter_tags, filter_status=filter_status, sort=sort)
        print("The response of CustomersApi->list_customers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->list_customers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_query** | **str**| Optional. Search term according to the Full-Text Search Rules. | [optional] 
 **filter_email** | **str**| Optional. Filter customers by email address (case sensitive). | [optional] 
 **filter_tags** | **str**| Optional. Filter Customers by Tags. | [optional] 
 **filter_status** | **str**| Optional. Filter customers by status (Active, Archived). Usage example: *filter[status][0]&#x3D;Active | [optional] 
 **sort** | **str**| Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]

### Return type

[**ListCustomers200Response**](ListCustomers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A page of customer resources, each a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_business_customer_officer**
> UpdateBusinessCustomerOfficer200Response update_business_customer_officer(customer_id, officer_id, update_business_customer_officer_request)

Update a business customer officer

Update an officer of a business customer.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.update_business_customer_officer200_response import UpdateBusinessCustomerOfficer200Response
from unit_finance_sdk.models.update_business_customer_officer_request import UpdateBusinessCustomerOfficerRequest
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
    api_instance = unit_finance_sdk.CustomersApi(api_client)
    customer_id = 'customer_id_example' # str | 
    officer_id = 'officer_id_example' # str | 
    update_business_customer_officer_request = unit_finance_sdk.UpdateBusinessCustomerOfficerRequest() # UpdateBusinessCustomerOfficerRequest | 

    try:
        # Update a business customer officer
        api_response = api_instance.update_business_customer_officer(customer_id, officer_id, update_business_customer_officer_request)
        print("The response of CustomersApi->update_business_customer_officer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->update_business_customer_officer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 
 **officer_id** | **str**|  | 
 **update_business_customer_officer_request** | [**UpdateBusinessCustomerOfficerRequest**](UpdateBusinessCustomerOfficerRequest.md)|  | 

### Return type

[**UpdateBusinessCustomerOfficer200Response**](UpdateBusinessCustomerOfficer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated officer resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_customer**
> UpdateCustomer200Response update_customer(customer_id, update_customer_request)

Update a customer

Update a customer. The Customer Updated webhook event will be fired. Variants:
- **UpdateBusinessCustomer**
- **UpdateIndividualCustomer**

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.update_customer200_response import UpdateCustomer200Response
from unit_finance_sdk.models.update_customer_request import UpdateCustomerRequest
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
    api_instance = unit_finance_sdk.CustomersApi(api_client)
    customer_id = 'customer_id_example' # str | 
    update_customer_request = unit_finance_sdk.UpdateCustomerRequest() # UpdateCustomerRequest | 

    try:
        # Update a customer
        api_response = api_instance.update_customer(customer_id, update_customer_request)
        print("The response of CustomersApi->update_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->update_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 
 **update_customer_request** | [**UpdateCustomerRequest**](UpdateCustomerRequest.md)|  | 

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

