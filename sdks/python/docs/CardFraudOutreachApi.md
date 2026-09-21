# unit_finance_sdk.CardFraudOutreachApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_policy**](CardFraudOutreachApi.md#create_policy) | **POST** /fraud-outreach-policies | Create a card fraud outreach policy
[**get_card_fraud_case_by_id**](CardFraudOutreachApi.md#get_card_fraud_case_by_id) | **GET** /card-fraud-cases/{id} | Get a card fraud case by id
[**get_policy_by_id**](CardFraudOutreachApi.md#get_policy_by_id) | **GET** /fraud-outreach-policies/{policyId} | Get a card fraud outreach policy by id
[**list_card_fraud_cases**](CardFraudOutreachApi.md#list_card_fraud_cases) | **GET** /card-fraud-cases | List card fraud cases
[**mark_card_fraud_case_as_fraud**](CardFraudOutreachApi.md#mark_card_fraud_case_as_fraud) | **POST** /card-fraud-cases/{id}/fraud | Mark a card fraud case as fraud
[**mark_card_fraud_case_as_no_fraud**](CardFraudOutreachApi.md#mark_card_fraud_case_as_no_fraud) | **POST** /card-fraud-cases/{id}/no-fraud | Mark a card fraud case as no fraud
[**update_policy**](CardFraudOutreachApi.md#update_policy) | **PATCH** /fraud-outreach-policies/{policyId} | Update a card fraud outreach policy


# **create_policy**
> CreatePolicy201Response create_policy(create_policy_request)

Create a card fraud outreach policy

Create a card fraud outreach policy.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_policy201_response import CreatePolicy201Response
from unit_finance_sdk.models.create_policy_request import CreatePolicyRequest
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
    api_instance = unit_finance_sdk.CardFraudOutreachApi(api_client)
    create_policy_request = unit_finance_sdk.CreatePolicyRequest() # CreatePolicyRequest | 

    try:
        # Create a card fraud outreach policy
        api_response = api_instance.create_policy(create_policy_request)
        print("The response of CardFraudOutreachApi->create_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardFraudOutreachApi->create_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_policy_request** | [**CreatePolicyRequest**](CreatePolicyRequest.md)|  | 

### Return type

[**CreatePolicy201Response**](CreatePolicy201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created CardFraudOutreachPolicy resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_card_fraud_case_by_id**
> GetCardFraudCaseById200Response get_card_fraud_case_by_id(id)

Get a card fraud case by id

Get a card fraud case by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_card_fraud_case_by_id200_response import GetCardFraudCaseById200Response
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
    api_instance = unit_finance_sdk.CardFraudOutreachApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get a card fraud case by id
        api_response = api_instance.get_card_fraud_case_by_id(id)
        print("The response of CardFraudOutreachApi->get_card_fraud_case_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardFraudOutreachApi->get_card_fraud_case_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**GetCardFraudCaseById200Response**](GetCardFraudCaseById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Card Fraud Case resource. Can be either Authorization or Transaction as indicated by the type field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_policy_by_id**
> CreatePolicy201Response get_policy_by_id(policy_id)

Get a card fraud outreach policy by id

Get a card fraud outreach policy by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_policy201_response import CreatePolicy201Response
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
    api_instance = unit_finance_sdk.CardFraudOutreachApi(api_client)
    policy_id = 'policy_id_example' # str | 

    try:
        # Get a card fraud outreach policy by id
        api_response = api_instance.get_policy_by_id(policy_id)
        print("The response of CardFraudOutreachApi->get_policy_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardFraudOutreachApi->get_policy_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_id** | **str**|  | 

### Return type

[**CreatePolicy201Response**](CreatePolicy201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested CardFraudOutreachPolicy resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_card_fraud_cases**
> ListCardFraudCases200Response list_card_fraud_cases(page_limit=page_limit, page_offset=page_offset, filter_card_id=filter_card_id, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_status=filter_status, filter_decision=filter_decision, sort=sort)

List card fraud cases

List card fraud case resources. Paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_card_fraud_cases200_response import ListCardFraudCases200Response
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
    api_instance = unit_finance_sdk.CardFraudOutreachApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_card_id = 'filter_card_id_example' # str | Optional. Filter by card id. (optional)
    filter_account_id = 'filter_account_id_example' # str | Optional. Filter by account id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filter by customer id. (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter by case status. Can be one of the following values: Created, Active, Closed, Expired. (optional)
    filter_decision = 'filter_decision_example' # str | Optional. Filter by case decision. Can be one of the following values: Pending, Fraud, NoFraud. (optional)
    sort = '-createdAt' # str | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

    try:
        # List card fraud cases
        api_response = api_instance.list_card_fraud_cases(page_limit=page_limit, page_offset=page_offset, filter_card_id=filter_card_id, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_status=filter_status, filter_decision=filter_decision, sort=sort)
        print("The response of CardFraudOutreachApi->list_card_fraud_cases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardFraudOutreachApi->list_card_fraud_cases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_card_id** | **str**| Optional. Filter by card id. | [optional] 
 **filter_account_id** | **str**| Optional. Filter by account id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filter by customer id. | [optional] 
 **filter_status** | **str**| Optional. Filter by case status. Can be one of the following values: Created, Active, Closed, Expired. | [optional] 
 **filter_decision** | **str**| Optional. Filter by case decision. Can be one of the following values: Pending, Fraud, NoFraud. | [optional] 
 **sort** | **str**| Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]

### Return type

[**ListCardFraudCases200Response**](ListCardFraudCases200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of card fraud case resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mark_card_fraud_case_as_fraud**
> GetCardFraudCaseById200Response mark_card_fraud_case_as_fraud(id, mark_card_fraud_case_as_fraud_request)

Mark a card fraud case as fraud

Mark a card fraud case as fraud.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_card_fraud_case_by_id200_response import GetCardFraudCaseById200Response
from unit_finance_sdk.models.mark_card_fraud_case_as_fraud_request import MarkCardFraudCaseAsFraudRequest
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
    api_instance = unit_finance_sdk.CardFraudOutreachApi(api_client)
    id = 'id_example' # str | 
    mark_card_fraud_case_as_fraud_request = unit_finance_sdk.MarkCardFraudCaseAsFraudRequest() # MarkCardFraudCaseAsFraudRequest | 

    try:
        # Mark a card fraud case as fraud
        api_response = api_instance.mark_card_fraud_case_as_fraud(id, mark_card_fraud_case_as_fraud_request)
        print("The response of CardFraudOutreachApi->mark_card_fraud_case_as_fraud:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardFraudOutreachApi->mark_card_fraud_case_as_fraud: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **mark_card_fraud_case_as_fraud_request** | [**MarkCardFraudCaseAsFraudRequest**](MarkCardFraudCaseAsFraudRequest.md)|  | 

### Return type

[**GetCardFraudCaseById200Response**](GetCardFraudCaseById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Card Fraud Case resource updated as Fraud. Can be either Authorization or Transaction as indicated by the type field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mark_card_fraud_case_as_no_fraud**
> GetCardFraudCaseById200Response mark_card_fraud_case_as_no_fraud(id, body=body)

Mark a card fraud case as no fraud

Mark a card fraud case as no fraud.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_card_fraud_case_by_id200_response import GetCardFraudCaseById200Response
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
    api_instance = unit_finance_sdk.CardFraudOutreachApi(api_client)
    id = 'id_example' # str | 
    body = None # object |  (optional)

    try:
        # Mark a card fraud case as no fraud
        api_response = api_instance.mark_card_fraud_case_as_no_fraud(id, body=body)
        print("The response of CardFraudOutreachApi->mark_card_fraud_case_as_no_fraud:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardFraudOutreachApi->mark_card_fraud_case_as_no_fraud: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**GetCardFraudCaseById200Response**](GetCardFraudCaseById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Card Fraud Case resource updated as No Fraud. Can be either Authorization or Transaction as indicated by the type field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_policy**
> CreatePolicy201Response update_policy(policy_id, update_policy_request)

Update a card fraud outreach policy

Update a card fraud outreach policy.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_policy201_response import CreatePolicy201Response
from unit_finance_sdk.models.update_policy_request import UpdatePolicyRequest
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
    api_instance = unit_finance_sdk.CardFraudOutreachApi(api_client)
    policy_id = 'policy_id_example' # str | 
    update_policy_request = unit_finance_sdk.UpdatePolicyRequest() # UpdatePolicyRequest | 

    try:
        # Update a card fraud outreach policy
        api_response = api_instance.update_policy(policy_id, update_policy_request)
        print("The response of CardFraudOutreachApi->update_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardFraudOutreachApi->update_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_id** | **str**|  | 
 **update_policy_request** | [**UpdatePolicyRequest**](UpdatePolicyRequest.md)|  | 

### Return type

[**CreatePolicy201Response**](CreatePolicy201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated CardFraudOutreachPolicy resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

