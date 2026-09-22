# AtmAuthorizationRequestAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**amount** | **int** | The amount (cents) of the authorization request. | 
**status** | **str** | The status of the authorization request. | 
**outcome** | **str** | What your programmatic integration produced when the request reached a terminal decision. See Understanding authorization decisions. | [optional] 
**direction** | **str** | The direction of the transaction (Credit or Debit). | 
**atm_name** | **str** | The name of the ATM. | 
**atm_location** | **str** | The location of the ATM. | 
**surcharge** | **int** | The surcharge amount in cents. | 
**tags** | **Dict[str, object]** | See Tags. When the authorization request was auto-completed using the timeout strategy, this field may also contain decision_source and timeout_strategy; prefer the outcome attribute for new integrations. | 

## Example

```python
from unit_finance_sdk.models.atm_authorization_request_attributes import AtmAuthorizationRequestAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AtmAuthorizationRequestAttributes from a JSON string
atm_authorization_request_attributes_instance = AtmAuthorizationRequestAttributes.from_json(json)
# print the JSON string representation of the object
print(AtmAuthorizationRequestAttributes.to_json())

# convert the object into a dict
atm_authorization_request_attributes_dict = atm_authorization_request_attributes_instance.to_dict()
# create an instance of AtmAuthorizationRequestAttributes from a dict
atm_authorization_request_attributes_from_dict = AtmAuthorizationRequestAttributes.from_dict(atm_authorization_request_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


