# unit_finance_sdk.CheckPaymentsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve_check_payment_additional_verification**](CheckPaymentsApi.md#approve_check_payment_additional_verification) | **POST** /check-payments/{checkPaymentId}/approve | Approve check payment additional verification
[**cancel_check_payment**](CheckPaymentsApi.md#cancel_check_payment) | **POST** /check-payments/{checkPaymentId}/cancel | Cancel a check payment
[**get_check_image**](CheckPaymentsApi.md#get_check_image) | **GET** /check-payments/{checkPaymentId}/{side}/{type} | Get a check payment image
[**get_check_payment**](CheckPaymentsApi.md#get_check_payment) | **GET** /check-payments/{checkPaymentId} | Get a check payment by id
[**list_check_payments**](CheckPaymentsApi.md#list_check_payments) | **GET** /check-payments | List check payments
[**originate_check_payment_mail_physical_check**](CheckPaymentsApi.md#originate_check_payment_mail_physical_check) | **POST** /check-payments | Originate a check payment
[**return_check_payment**](CheckPaymentsApi.md#return_check_payment) | **POST** /check-payments/{checkPaymentId}/return | Return a check payment


# **approve_check_payment_additional_verification**
> OriginateCheckPaymentMailPhysicalCheck201Response approve_check_payment_additional_verification(check_payment_id, approve_check_payment_additional_verification_request)

Approve check payment additional verification

When a Check Payment requires additional verification, its `additionalVerificationStatus` will be set to `Required`. In this case, a CheckPayment.additionalVerificationRequired event will be triggered.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.approve_check_payment_additional_verification_request import ApproveCheckPaymentAdditionalVerificationRequest
from unit_finance_sdk.models.originate_check_payment_mail_physical_check201_response import OriginateCheckPaymentMailPhysicalCheck201Response
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
    api_instance = unit_finance_sdk.CheckPaymentsApi(api_client)
    check_payment_id = 'check_payment_id_example' # str | 
    approve_check_payment_additional_verification_request = unit_finance_sdk.ApproveCheckPaymentAdditionalVerificationRequest() # ApproveCheckPaymentAdditionalVerificationRequest | 

    try:
        # Approve check payment additional verification
        api_response = api_instance.approve_check_payment_additional_verification(check_payment_id, approve_check_payment_additional_verification_request)
        print("The response of CheckPaymentsApi->approve_check_payment_additional_verification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckPaymentsApi->approve_check_payment_additional_verification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_payment_id** | **str**|  | 
 **approve_check_payment_additional_verification_request** | [**ApproveCheckPaymentAdditionalVerificationRequest**](ApproveCheckPaymentAdditionalVerificationRequest.md)|  | 

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CheckPayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_check_payment**
> OriginateCheckPaymentMailPhysicalCheck201Response cancel_check_payment(check_payment_id, body=body)

Cancel a check payment

Cancels a previously processed check payment. Only check payments in status `Pending` can be canceled. If cancelation was successful, the check status will change to `Canceled` and a checkPayment.canceled will be fired.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.originate_check_payment_mail_physical_check201_response import OriginateCheckPaymentMailPhysicalCheck201Response
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
    api_instance = unit_finance_sdk.CheckPaymentsApi(api_client)
    check_payment_id = 'check_payment_id_example' # str | 
    body = None # object |  (optional)

    try:
        # Cancel a check payment
        api_response = api_instance.cancel_check_payment(check_payment_id, body=body)
        print("The response of CheckPaymentsApi->cancel_check_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckPaymentsApi->cancel_check_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_payment_id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The canceled payment. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_check_image**
> bytes get_check_image(check_payment_id, side, type)

Get a check payment image

Get a check payment image by check payment id, side (front or back), and type (printed or deposited).

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
    api_instance = unit_finance_sdk.CheckPaymentsApi(api_client)
    check_payment_id = 'check_payment_id_example' # str | 
    side = 'side_example' # str | Check side: front or back.
    type = 'type_example' # str | Image type: printed or deposited.

    try:
        # Get a check payment image
        api_response = api_instance.get_check_image(check_payment_id, side, type)
        print("The response of CheckPaymentsApi->get_check_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckPaymentsApi->get_check_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_payment_id** | **str**|  | 
 **side** | **str**| Check side: front or back. | 
 **type** | **str**| Image type: printed or deposited. | 

### Return type

**bytes**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The check payment image. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_check_payment**
> GetCheckPayment200Response get_check_payment(check_payment_id, include=include)

Get a check payment by id

Get a check payment by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_check_payment200_response import GetCheckPayment200Response
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
    api_instance = unit_finance_sdk.CheckPaymentsApi(api_client)
    check_payment_id = 'check_payment_id_example' # str | 
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional)

    try:
        # Get a check payment by id
        api_response = api_instance.get_check_payment(check_payment_id, include=include)
        print("The response of CheckPaymentsApi->get_check_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckPaymentsApi->get_check_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_payment_id** | **str**|  | 
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] 

### Return type

[**GetCheckPayment200Response**](GetCheckPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CheckPayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_check_payments**
> ListCheckPayments200Response list_check_payments(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_tags=filter_tags, sort=sort, filter_since=filter_since, filter_until=filter_until, filter_status=filter_status, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, filter_check_number=filter_check_number, include=include)

List check payments

List check payments resources. Filtering, paging and sorting can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_check_payments200_response import ListCheckPayments200Response
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
    api_instance = unit_finance_sdk.CheckPaymentsApi(api_client)
    page_limit = '100' # str | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter check payments by Tags. (optional)
    sort = '-createdAt' # str | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')
    filter_since = 'filter_since_example' # str | Optional. Filters *before* the specified date. e.g. 2021-06-01 (optional)
    filter_until = 'filter_until_example' # str | Optional. Filters *after* the specified date. e.g. 2021-07-01 (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter by status (New, Pending, Canceled,Rejected, InDelivery, InProduction,Delivered, ReturnedToSender, Pending, Processed, PendingReview,MarkedForReturn, Returned, `). Usage example: *filter[status][0]=Processed* (optional)
    filter_from_amount = 'filter_from_amount_example' # str | Optional. Filters the Check Payment that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional)
    filter_to_amount = 'filter_to_amount_example' # str | Optional. Filters the Check Payment that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional)
    filter_check_number = 'filter_check_number_example' # str | Optional. Filter Check Payments by check number (trimming leading zeros). (optional)
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional)

    try:
        # List check payments
        api_response = api_instance.list_check_payments(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_tags=filter_tags, sort=sort, filter_since=filter_since, filter_until=filter_until, filter_status=filter_status, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, filter_check_number=filter_check_number, include=include)
        print("The response of CheckPaymentsApi->list_check_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckPaymentsApi->list_check_payments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_tags** | **str**| Optional. Filter check payments by Tags. | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]
 **filter_since** | **str**| Optional. Filters *before* the specified date. e.g. 2021-06-01 | [optional] 
 **filter_until** | **str**| Optional. Filters *after* the specified date. e.g. 2021-07-01 | [optional] 
 **filter_status** | **str**| Optional. Filter by status (New, Pending, Canceled,Rejected, InDelivery, InProduction,Delivered, ReturnedToSender, Pending, Processed, PendingReview,MarkedForReturn, Returned, &#x60;). Usage example: *filter[status][0]&#x3D;Processed* | [optional] 
 **filter_from_amount** | **str**| Optional. Filters the Check Payment that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] 
 **filter_to_amount** | **str**| Optional. Filters the Check Payment that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] 
 **filter_check_number** | **str**| Optional. Filter Check Payments by check number (trimming leading zeros). | [optional] 
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] 

### Return type

[**ListCheckPayments200Response**](ListCheckPayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of check payment resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **originate_check_payment_mail_physical_check**
> OriginateCheckPaymentMailPhysicalCheck201Response originate_check_payment_mail_physical_check(originate_check_payment_mail_physical_check_request)

Originate a check payment

Creates a physical check. The check will be printed and mailed to the US recipient specified in the request. Originated check payments can be set to be sent immediately or scheduled for a future date.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.originate_check_payment_mail_physical_check201_response import OriginateCheckPaymentMailPhysicalCheck201Response
from unit_finance_sdk.models.originate_check_payment_mail_physical_check_request import OriginateCheckPaymentMailPhysicalCheckRequest
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
    api_instance = unit_finance_sdk.CheckPaymentsApi(api_client)
    originate_check_payment_mail_physical_check_request = unit_finance_sdk.OriginateCheckPaymentMailPhysicalCheckRequest() # OriginateCheckPaymentMailPhysicalCheckRequest | 

    try:
        # Originate a check payment
        api_response = api_instance.originate_check_payment_mail_physical_check(originate_check_payment_mail_physical_check_request)
        print("The response of CheckPaymentsApi->originate_check_payment_mail_physical_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckPaymentsApi->originate_check_payment_mail_physical_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originate_check_payment_mail_physical_check_request** | [**OriginateCheckPaymentMailPhysicalCheckRequest**](OriginateCheckPaymentMailPhysicalCheckRequest.md)|  | 

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Creates a physical check. The check will be printed and mailed to the US recipient specified in the request. Originated check payments can be set to be sent immediately or scheduled for a future date. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **return_check_payment**
> OriginateCheckPaymentMailPhysicalCheck201Response return_check_payment(check_payment_id, return_check_payment_request)

Return a check payment

Create a return as long as it happens before the `returnCutoffTime`, the Check Payment status will be set to `MarkedForReturn`. A CheckPayment.markedForReturn event is raised when the request is completed successfully.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.originate_check_payment_mail_physical_check201_response import OriginateCheckPaymentMailPhysicalCheck201Response
from unit_finance_sdk.models.return_check_payment_request import ReturnCheckPaymentRequest
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
    api_instance = unit_finance_sdk.CheckPaymentsApi(api_client)
    check_payment_id = 'check_payment_id_example' # str | 
    return_check_payment_request = unit_finance_sdk.ReturnCheckPaymentRequest() # ReturnCheckPaymentRequest | 

    try:
        # Return a check payment
        api_response = api_instance.return_check_payment(check_payment_id, return_check_payment_request)
        print("The response of CheckPaymentsApi->return_check_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckPaymentsApi->return_check_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_payment_id** | **str**|  | 
 **return_check_payment_request** | [**ReturnCheckPaymentRequest**](ReturnCheckPaymentRequest.md)|  | 

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CheckPayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

