# unit_finance_sdk.RepaymentsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_repayment**](RepaymentsApi.md#create_repayment) | **POST** /repayments | Create a repayment
[**get_repayment**](RepaymentsApi.md#get_repayment) | **GET** /repayments/{repaymentId} | Get a repayment by id
[**list_repayments**](RepaymentsApi.md#list_repayments) | **GET** /repayments | List repayments
[**return_external_repayment**](RepaymentsApi.md#return_external_repayment) | **POST** /repayments/{repaymentId}/return | Return an external repayment


# **create_repayment**
> CreateRepayment201Response create_repayment(create_repayment_request)

Create a repayment

Create a repayment for a credit account. The request body is one of CreateACHRepaymentRequest, CreateBookRepaymentRequest, CreateCapitalPartnerACHRepaymentRequest, CreateCapitalPartnerBookRepaymentRequest, or CreateExternalRepaymentRequest, discriminated by data.type (repayment, externalRepayment) together with the relationships supplied — the capital partner variants omit the account relationship, the book variants use counterpartyAccount instead of counterparty, and the external variant only takes creditAccount.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_repayment201_response import CreateRepayment201Response
from unit_finance_sdk.models.create_repayment_request import CreateRepaymentRequest
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
    api_instance = unit_finance_sdk.RepaymentsApi(api_client)
    create_repayment_request = unit_finance_sdk.CreateRepaymentRequest() # CreateRepaymentRequest | 

    try:
        # Create a repayment
        api_response = api_instance.create_repayment(create_repayment_request)
        print("The response of RepaymentsApi->create_repayment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepaymentsApi->create_repayment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_repayment_request** | [**CreateRepaymentRequest**](CreateRepaymentRequest.md)|  | 

### Return type

[**CreateRepayment201Response**](CreateRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The requested resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_repayment**
> GetRepayment200Response get_repayment(repayment_id)

Get a repayment by id

Get a repayment by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_repayment200_response import GetRepayment200Response
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
    api_instance = unit_finance_sdk.RepaymentsApi(api_client)
    repayment_id = 'repayment_id_example' # str | 

    try:
        # Get a repayment by id
        api_response = api_instance.get_repayment(repayment_id)
        print("The response of RepaymentsApi->get_repayment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepaymentsApi->get_repayment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repayment_id** | **str**|  | 

### Return type

[**GetRepayment200Response**](GetRepayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Repayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_repayments**
> ListRepayments200Response list_repayments(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_credit_account_id=filter_credit_account_id, filter_recurring_repayment_id=filter_recurring_repayment_id, filter_customer_id=filter_customer_id, filter_status=filter_status, filter_type=filter_type, filter_since=filter_since, filter_until=filter_until)

List repayments

List repayments resources. Filtering, paging and sorting can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_repayments200_response import ListRepayments200Response
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
    api_instance = unit_finance_sdk.RepaymentsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_credit_account_id = 'filter_credit_account_id_example' # str | Optional. Filters the results by the specified credit account id. (optional)
    filter_recurring_repayment_id = 'filter_recurring_repayment_id_example' # str | Optional. Filters the result according to the associated Recurring Repayment id (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter repayments by status (Pending, PendingReview, Returned, Sent or Rejected). Usage example: *filter[status][0]=Active (optional)
    filter_type = 'filter_type_example' # str | Optional. Filter repayments by Repayment type. such as (AchRepayment, BookRepayment, ExternalRepayment). Usage example: *filter[type][0]=AchRepayment&filter[type][1]=BookRepayment* (optional)
    filter_since = 'filter_since_example' # str | Optional. Filters Repayments that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z (optional)
    filter_until = 'filter_until_example' # str | Optional. Filters the Repayments that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z (optional)

    try:
        # List repayments
        api_response = api_instance.list_repayments(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_credit_account_id=filter_credit_account_id, filter_recurring_repayment_id=filter_recurring_repayment_id, filter_customer_id=filter_customer_id, filter_status=filter_status, filter_type=filter_type, filter_since=filter_since, filter_until=filter_until)
        print("The response of RepaymentsApi->list_repayments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepaymentsApi->list_repayments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_credit_account_id** | **str**| Optional. Filters the results by the specified credit account id. | [optional] 
 **filter_recurring_repayment_id** | **str**| Optional. Filters the result according to the associated Recurring Repayment id | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_status** | **str**| Optional. Filter repayments by status (Pending, PendingReview, Returned, Sent or Rejected). Usage example: *filter[status][0]&#x3D;Active | [optional] 
 **filter_type** | **str**| Optional. Filter repayments by Repayment type. such as (AchRepayment, BookRepayment, ExternalRepayment). Usage example: *filter[type][0]&#x3D;AchRepayment&amp;filter[type][1]&#x3D;BookRepayment* | [optional] 
 **filter_since** | **str**| Optional. Filters Repayments that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] 
 **filter_until** | **str**| Optional. Filters the Repayments that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] 

### Return type

[**ListRepayments200Response**](ListRepayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of repayment resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **return_external_repayment**
> ReturnExternalRepayment200Response return_external_repayment(repayment_id, return_external_repayment_request)

Return an external repayment

Returns an external repayment that was previously created with `Sent` status. This is used when the external payment needs to be reversed. When an external repayment is returned, the credit account balance will increase and the available credit limit will decrease.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.return_external_repayment200_response import ReturnExternalRepayment200Response
from unit_finance_sdk.models.return_external_repayment_request import ReturnExternalRepaymentRequest
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
    api_instance = unit_finance_sdk.RepaymentsApi(api_client)
    repayment_id = 'repayment_id_example' # str | 
    return_external_repayment_request = unit_finance_sdk.ReturnExternalRepaymentRequest() # ReturnExternalRepaymentRequest | 

    try:
        # Return an external repayment
        api_response = api_instance.return_external_repayment(repayment_id, return_external_repayment_request)
        print("The response of RepaymentsApi->return_external_repayment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepaymentsApi->return_external_repayment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repayment_id** | **str**|  | 
 **return_external_repayment_request** | [**ReturnExternalRepaymentRequest**](ReturnExternalRepaymentRequest.md)|  | 

### Return type

[**ReturnExternalRepayment200Response**](ReturnExternalRepayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

