# unit_finance_sdk.StopPaymentsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_stop_payment**](StopPaymentsApi.md#create_stop_payment) | **POST** /stop-payments | Create a stop payment
[**disable_stop_payment**](StopPaymentsApi.md#disable_stop_payment) | **POST** /stop-payments/{stopPaymentId}/disable | Disable a stop payment
[**get_stop_payment**](StopPaymentsApi.md#get_stop_payment) | **GET** /stop-payments/{stopPaymentId} | Get a stop payment by id
[**list_stop_payments**](StopPaymentsApi.md#list_stop_payments) | **GET** /stop-payments | List stop payments
[**update_ach_stop_payment**](StopPaymentsApi.md#update_ach_stop_payment) | **PATCH** /stop-payments/{stopPaymentId} | Update an ACH stop payment


# **create_stop_payment**
> CreateStopPayment201Response create_stop_payment(create_stop_payment_request)

Create a stop payment

Create a stop payment. The request body is one of CreateACHStopPaymentRequest or CreateCheckStopPaymentRequest, discriminated by data.type (achStopPayment, checkStopPayment). The stopPayment created webhook event will be fired.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_stop_payment201_response import CreateStopPayment201Response
from unit_finance_sdk.models.create_stop_payment_request import CreateStopPaymentRequest
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
    api_instance = unit_finance_sdk.StopPaymentsApi(api_client)
    create_stop_payment_request = unit_finance_sdk.CreateStopPaymentRequest() # CreateStopPaymentRequest | 

    try:
        # Create a stop payment
        api_response = api_instance.create_stop_payment(create_stop_payment_request)
        print("The response of StopPaymentsApi->create_stop_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StopPaymentsApi->create_stop_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_stop_payment_request** | [**CreateStopPaymentRequest**](CreateStopPaymentRequest.md)|  | 

### Return type

[**CreateStopPayment201Response**](CreateStopPayment201Response.md)

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

# **disable_stop_payment**
> GetStopPayment200Response disable_stop_payment(stop_payment_id, body=body)

Disable a stop payment

Disable a Stop Payment by id. When a Stop Payment is disabled, the checkStopPayment disabled webhook event is fired and future check payments wont be stopped by this stop payment.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_stop_payment200_response import GetStopPayment200Response
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
    api_instance = unit_finance_sdk.StopPaymentsApi(api_client)
    stop_payment_id = 'stop_payment_id_example' # str | 
    body = None # object |  (optional)

    try:
        # Disable a stop payment
        api_response = api_instance.disable_stop_payment(stop_payment_id, body=body)
        print("The response of StopPaymentsApi->disable_stop_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StopPaymentsApi->disable_stop_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stop_payment_id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**GetStopPayment200Response**](GetStopPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | checkStopPayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_stop_payment**
> GetStopPayment200Response get_stop_payment(stop_payment_id)

Get a stop payment by id

Get a stop payment by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_stop_payment200_response import GetStopPayment200Response
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
    api_instance = unit_finance_sdk.StopPaymentsApi(api_client)
    stop_payment_id = 'stop_payment_id_example' # str | 

    try:
        # Get a stop payment by id
        api_response = api_instance.get_stop_payment(stop_payment_id)
        print("The response of StopPaymentsApi->get_stop_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StopPaymentsApi->get_stop_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stop_payment_id** | **str**|  | 

### Return type

[**GetStopPayment200Response**](GetStopPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | checkStopPayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_stop_payments**
> ListStopPayments200Response list_stop_payments(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_tags=filter_tags, sort=sort, filter_since=filter_since, filter_until=filter_until, filter_status=filter_status, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, filter_no_amount=filter_no_amount, filter_from_min_amount=filter_from_min_amount, filter_to_min_amount=filter_to_min_amount, filter_no_min_amount=filter_no_min_amount, filter_originator_name=filter_originator_name, filter_no_originator_name=filter_no_originator_name, filter_check_number=filter_check_number, filter_type=filter_type)

List stop payments

List stop payment resources. Filtering, paging and sorting can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_stop_payments200_response import ListStopPayments200Response
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
    api_instance = unit_finance_sdk.StopPaymentsApi(api_client)
    page_limit = '100' # str | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter stop payments by Tags. (optional)
    sort = '-createdAt' # str | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')
    filter_since = 'filter_since_example' # str | Optional. Filters *before* the specified date. e.g. 2021-06-01 (optional)
    filter_until = 'filter_until_example' # str | Optional. Filters *after* the specified date. e.g. 2021-07-01 (optional)
    filter_status = 'Active' # str | Optional. Filter by status (Active, Disabled). Usage example: *filter[status][0]=Disabled* (optional) (default to 'Active')
    filter_from_amount = 'filter_from_amount_example' # str | Optional. Filters the Check Stop Payments that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional)
    filter_to_amount = 'filter_to_amount_example' # str | Optional. Filters the Stop Payments that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional)
    filter_no_amount = 'filter_no_amount_example' # str | Optional. If set to true, returns only Stop Payments with no amount . If set to false only returns Stop Payments with amount (optional)
    filter_from_min_amount = 'filter_from_min_amount_example' # str | Optional. Filters ACH stop Payments that have minAmount higher than the specified amount (cents). (optional)
    filter_to_min_amount = 'filter_to_min_amount_example' # str | Optional. Filters ACH stop Payments that have minAmount lower than the specified amount (cents). (optional)
    filter_no_min_amount = 'filter_no_min_amount_example' # str | Optional. If set to true, returns only ACH Stop Payments with no minAmount . If set to false only returns Stop Payments with minAmount (optional)
    filter_originator_name = 'filter_originator_name_example' # str | Optional. (optional)
    filter_no_originator_name = 'filter_no_originator_name_example' # str | Optional. (optional)
    filter_check_number = 'filter_check_number_example' # str | Optional. Filter Stop Payments by check number (trimming leading zeros). (optional)
    filter_type = 'filter_type_example' # str | Optional. Either checkStopPayment or achStopPayment (optional)

    try:
        # List stop payments
        api_response = api_instance.list_stop_payments(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_tags=filter_tags, sort=sort, filter_since=filter_since, filter_until=filter_until, filter_status=filter_status, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, filter_no_amount=filter_no_amount, filter_from_min_amount=filter_from_min_amount, filter_to_min_amount=filter_to_min_amount, filter_no_min_amount=filter_no_min_amount, filter_originator_name=filter_originator_name, filter_no_originator_name=filter_no_originator_name, filter_check_number=filter_check_number, filter_type=filter_type)
        print("The response of StopPaymentsApi->list_stop_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StopPaymentsApi->list_stop_payments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_tags** | **str**| Optional. Filter stop payments by Tags. | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]
 **filter_since** | **str**| Optional. Filters *before* the specified date. e.g. 2021-06-01 | [optional] 
 **filter_until** | **str**| Optional. Filters *after* the specified date. e.g. 2021-07-01 | [optional] 
 **filter_status** | **str**| Optional. Filter by status (Active, Disabled). Usage example: *filter[status][0]&#x3D;Disabled* | [optional] [default to &#39;Active&#39;]
 **filter_from_amount** | **str**| Optional. Filters the Check Stop Payments that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] 
 **filter_to_amount** | **str**| Optional. Filters the Stop Payments that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] 
 **filter_no_amount** | **str**| Optional. If set to true, returns only Stop Payments with no amount . If set to false only returns Stop Payments with amount | [optional] 
 **filter_from_min_amount** | **str**| Optional. Filters ACH stop Payments that have minAmount higher than the specified amount (cents). | [optional] 
 **filter_to_min_amount** | **str**| Optional. Filters ACH stop Payments that have minAmount lower than the specified amount (cents). | [optional] 
 **filter_no_min_amount** | **str**| Optional. If set to true, returns only ACH Stop Payments with no minAmount . If set to false only returns Stop Payments with minAmount | [optional] 
 **filter_originator_name** | **str**| Optional. | [optional] 
 **filter_no_originator_name** | **str**| Optional. | [optional] 
 **filter_check_number** | **str**| Optional. Filter Stop Payments by check number (trimming leading zeros). | [optional] 
 **filter_type** | **str**| Optional. Either checkStopPayment or achStopPayment | [optional] 

### Return type

[**ListStopPayments200Response**](ListStopPayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of check stop payments resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_ach_stop_payment**
> UpdateAchStopPayment200Response update_ach_stop_payment(stop_payment_id, update_ach_stop_payment_request)

Update an ACH stop payment

Update an AchStopPayment.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.update_ach_stop_payment200_response import UpdateAchStopPayment200Response
from unit_finance_sdk.models.update_ach_stop_payment_request import UpdateAchStopPaymentRequest
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
    api_instance = unit_finance_sdk.StopPaymentsApi(api_client)
    stop_payment_id = 'stop_payment_id_example' # str | 
    update_ach_stop_payment_request = unit_finance_sdk.UpdateAchStopPaymentRequest() # UpdateAchStopPaymentRequest | 

    try:
        # Update an ACH stop payment
        api_response = api_instance.update_ach_stop_payment(stop_payment_id, update_ach_stop_payment_request)
        print("The response of StopPaymentsApi->update_ach_stop_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StopPaymentsApi->update_ach_stop_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stop_payment_id** | **str**|  | 
 **update_ach_stop_payment_request** | [**UpdateAchStopPaymentRequest**](UpdateAchStopPaymentRequest.md)|  | 

### Return type

[**UpdateAchStopPayment200Response**](UpdateAchStopPayment200Response.md)

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

