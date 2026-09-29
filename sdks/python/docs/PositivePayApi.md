# unit_finance_sdk.PositivePayApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_positive_pay**](PositivePayApi.md#cancel_positive_pay) | **POST** /positive-pay/{positivePayId}/cancel | Cancel a positive pay rule
[**configure_positive_pay_policy**](PositivePayApi.md#configure_positive_pay_policy) | **POST** /positive-pay-policy | Configure a positive pay policy
[**create_positive_pay**](PositivePayApi.md#create_positive_pay) | **POST** /positive-pay | Create a positive pay rule
[**get_positive_pay_by_id**](PositivePayApi.md#get_positive_pay_by_id) | **GET** /positive-pay/{positivePayId} | Get a positive pay rule by id
[**list_positive_pay**](PositivePayApi.md#list_positive_pay) | **GET** /positive-pay | List positive pay rules
[**upload_positive_pay_document**](PositivePayApi.md#upload_positive_pay_document) | **PUT** /positive-pay/{positivePayId}/documents | Upload a positive pay document


# **cancel_positive_pay**
> CancelPositivePay200Response cancel_positive_pay(positive_pay_id, body=body)

Cancel a positive pay rule

Cancel a Positive Pay rule by ID. Cancelled rules stop authorizing payments.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.cancel_positive_pay200_response import CancelPositivePay200Response
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
    api_instance = unit_finance_sdk.PositivePayApi(api_client)
    positive_pay_id = 'positive_pay_id_example' # str | 
    body = None # object |  (optional)

    try:
        # Cancel a positive pay rule
        api_response = api_instance.cancel_positive_pay(positive_pay_id, body=body)
        print("The response of PositivePayApi->cancel_positive_pay:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PositivePayApi->cancel_positive_pay: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positive_pay_id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**CancelPositivePay200Response**](CancelPositivePay200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cancelled Positive Pay rule. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configure_positive_pay_policy**
> configure_positive_pay_policy(configure_positive_pay_policy_request)

Configure a positive pay policy

Configure Positive Pay policy to control which payment types require matching Positive Pay rules before they can be processed.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.configure_positive_pay_policy_request import ConfigurePositivePayPolicyRequest
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
    api_instance = unit_finance_sdk.PositivePayApi(api_client)
    configure_positive_pay_policy_request = unit_finance_sdk.ConfigurePositivePayPolicyRequest() # ConfigurePositivePayPolicyRequest | 

    try:
        # Configure a positive pay policy
        api_instance.configure_positive_pay_policy(configure_positive_pay_policy_request)
    except Exception as e:
        print("Exception when calling PositivePayApi->configure_positive_pay_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configure_positive_pay_policy_request** | [**ConfigurePositivePayPolicyRequest**](ConfigurePositivePayPolicyRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Positive Pay policy was configured. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_positive_pay**
> CreatePositivePay201Response create_positive_pay(create_positive_pay_request)

Create a positive pay rule

Create a Positive Pay rule. Variants:
- **CreateCheckPaymentPositivePay**
- **CreateReceivedACHDebitPositivePay**
- **CreateWireDrawdownPositivePay**

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_positive_pay201_response import CreatePositivePay201Response
from unit_finance_sdk.models.create_positive_pay_request import CreatePositivePayRequest
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
    api_instance = unit_finance_sdk.PositivePayApi(api_client)
    create_positive_pay_request = unit_finance_sdk.CreatePositivePayRequest() # CreatePositivePayRequest | 

    try:
        # Create a positive pay rule
        api_response = api_instance.create_positive_pay(create_positive_pay_request)
        print("The response of PositivePayApi->create_positive_pay:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PositivePayApi->create_positive_pay: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_positive_pay_request** | [**CreatePositivePayRequest**](CreatePositivePayRequest.md)|  | 

### Return type

[**CreatePositivePay201Response**](CreatePositivePay201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created Positive Pay rule, distinguished by the &#x60;type&#x60; field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_positive_pay_by_id**
> GetPositivePayById200Response get_positive_pay_by_id(positive_pay_id)

Get a positive pay rule by id

Get a Positive Pay rule by ID.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_positive_pay_by_id200_response import GetPositivePayById200Response
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
    api_instance = unit_finance_sdk.PositivePayApi(api_client)
    positive_pay_id = 'positive_pay_id_example' # str | 

    try:
        # Get a positive pay rule by id
        api_response = api_instance.get_positive_pay_by_id(positive_pay_id)
        print("The response of PositivePayApi->get_positive_pay_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PositivePayApi->get_positive_pay_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positive_pay_id** | **str**|  | 

### Return type

[**GetPositivePayById200Response**](GetPositivePayById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Positive Pay rule. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_positive_pay**
> ListPositivePay200Response list_positive_pay(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_status=filter_status, filter_type=filter_type, filter_tags=filter_tags, sort=sort)

List positive pay rules

List Positive Pay rules. Filtering, paging, and sorting can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_positive_pay200_response import ListPositivePay200Response
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
    api_instance = unit_finance_sdk.PositivePayApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_status = 'filter_status_example' # str | Optional. Filters by rule status. One of: AwaitingDocuments, Active, Expired, Cancelled. (optional)
    filter_type = 'filter_type_example' # str | Optional. Filters by rule type. One of: receivedAchDebitPositivePay, checkPaymentPositivePay, drawdownPositivePay. (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter positive pay by Tags. (optional)
    sort = '-createdAt' # str | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

    try:
        # List positive pay rules
        api_response = api_instance.list_positive_pay(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_status=filter_status, filter_type=filter_type, filter_tags=filter_tags, sort=sort)
        print("The response of PositivePayApi->list_positive_pay:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PositivePayApi->list_positive_pay: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_status** | **str**| Optional. Filters by rule status. One of: AwaitingDocuments, Active, Expired, Cancelled. | [optional] 
 **filter_type** | **str**| Optional. Filters by rule type. One of: receivedAchDebitPositivePay, checkPaymentPositivePay, drawdownPositivePay. | [optional] 
 **filter_tags** | **str**| Optional. Filter positive pay by Tags. | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]

### Return type

[**ListPositivePay200Response**](ListPositivePay200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of positive pay rule resources. Each resource can be any of the listed rule types, as indicated by the type field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_positive_pay_document**
> upload_positive_pay_document(positive_pay_id, body)

Upload a positive pay document

Upload the authorization document required to activate a drawdown rule (Wire Drawdown Only).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
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
    api_instance = unit_finance_sdk.PositivePayApi(api_client)
    positive_pay_id = 'positive_pay_id_example' # str | 
    body = None # bytes | 

    try:
        # Upload a positive pay document
        api_instance.upload_positive_pay_document(positive_pay_id, body)
    except Exception as e:
        print("Exception when calling PositivePayApi->upload_positive_pay_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positive_pay_id** | **str**|  | 
 **body** | **bytes**|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/pdf, image/jpeg, image/png
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The authorization document was uploaded. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

