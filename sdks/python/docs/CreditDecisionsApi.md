# unit_finance_sdk.CreditDecisionsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_credit_decision**](CreditDecisionsApi.md#create_credit_decision) | **POST** /credit-decisions | Create a credit decision
[**get_credit_decision**](CreditDecisionsApi.md#get_credit_decision) | **GET** /credit-decisions/{id} | Get a credit decision by id
[**list_credit_decisions**](CreditDecisionsApi.md#list_credit_decisions) | **GET** /credit-decisions | List credit decisions


# **create_credit_decision**
> CreateCreditDecision201Response create_credit_decision(create_credit_decision_request)

Create a credit decision

Create a credit decision for a credit application. The request body is one of CreateApprovedCreditLimitDecisionRequest (an approved decision for an existing customer), CreateDeniedCreditLimitDecisionRequest (a denied decision for an existing customer), CreateManualReviewCreditLimitDecisionRequest (a manual review decision for an existing customer), CreateDeniedCreditApplicationDecisionRequest (a denied decision before a customer exists) or CreateManualReviewCreditApplicationDecisionRequest (a manual review decision before a customer exists).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_credit_decision201_response import CreateCreditDecision201Response
from unit_finance_sdk.models.create_credit_decision_request import CreateCreditDecisionRequest
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
    api_instance = unit_finance_sdk.CreditDecisionsApi(api_client)
    create_credit_decision_request = unit_finance_sdk.CreateCreditDecisionRequest() # CreateCreditDecisionRequest | 

    try:
        # Create a credit decision
        api_response = api_instance.create_credit_decision(create_credit_decision_request)
        print("The response of CreditDecisionsApi->create_credit_decision:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditDecisionsApi->create_credit_decision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_credit_decision_request** | [**CreateCreditDecisionRequest**](CreateCreditDecisionRequest.md)|  | 

### Return type

[**CreateCreditDecision201Response**](CreateCreditDecision201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The returned resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_credit_decision**
> CreateCreditDecision201Response get_credit_decision(id)

Get a credit decision by id

Get a credit decision resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_credit_decision201_response import CreateCreditDecision201Response
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
    api_instance = unit_finance_sdk.CreditDecisionsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get a credit decision by id
        api_response = api_instance.get_credit_decision(id)
        print("The response of CreditDecisionsApi->get_credit_decision:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditDecisionsApi->get_credit_decision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**CreateCreditDecision201Response**](CreateCreditDecision201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A credit decision resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_credit_decisions**
> ListCreditDecisions200Response list_credit_decisions(page_limit=page_limit, page_offset=page_offset, filter_org_id=filter_org_id, filter_customer_id=filter_customer_id, filter_account_id=filter_account_id, filter_application_id=filter_application_id, filter_bank_id=filter_bank_id, filter_decision=filter_decision, filter_evaluation_type=filter_evaluation_type)

List credit decisions

List credit decision resources. Paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_credit_decisions200_response import ListCreditDecisions200Response
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
    api_instance = unit_finance_sdk.CreditDecisionsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_org_id = 'filter_org_id_example' # str | Optional. Filters the results by the specified org id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_application_id = 'filter_application_id_example' # str | Optional. Filters the results by the specified application id. (optional)
    filter_bank_id = 'filter_bank_id_example' # str | Optional. Filters the results by the specified bank id. (optional)
    filter_decision = 'filter_decision_example' # str | Optional. Filters the results by the specified decision (one of Approved or Denied). (optional)
    filter_evaluation_type = 'filter_evaluation_type_example' # str | Optional. Filters the results by the specified evaluation type (one of CreditLimit or CreditApplication). (optional)

    try:
        # List credit decisions
        api_response = api_instance.list_credit_decisions(page_limit=page_limit, page_offset=page_offset, filter_org_id=filter_org_id, filter_customer_id=filter_customer_id, filter_account_id=filter_account_id, filter_application_id=filter_application_id, filter_bank_id=filter_bank_id, filter_decision=filter_decision, filter_evaluation_type=filter_evaluation_type)
        print("The response of CreditDecisionsApi->list_credit_decisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditDecisionsApi->list_credit_decisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_org_id** | **str**| Optional. Filters the results by the specified org id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_application_id** | **str**| Optional. Filters the results by the specified application id. | [optional] 
 **filter_bank_id** | **str**| Optional. Filters the results by the specified bank id. | [optional] 
 **filter_decision** | **str**| Optional. Filters the results by the specified decision (one of Approved or Denied). | [optional] 
 **filter_evaluation_type** | **str**| Optional. Filters the results by the specified evaluation type (one of CreditLimit or CreditApplication). | [optional] 

### Return type

[**ListCreditDecisions200Response**](ListCreditDecisions200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of credit-decisions resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

