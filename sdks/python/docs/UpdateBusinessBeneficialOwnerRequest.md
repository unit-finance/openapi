# UpdateBusinessBeneficialOwnerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateBusinessBeneficialOwnerData**](UpdateBusinessBeneficialOwnerData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_business_beneficial_owner_request import UpdateBusinessBeneficialOwnerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessBeneficialOwnerRequest from a JSON string
update_business_beneficial_owner_request_instance = UpdateBusinessBeneficialOwnerRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessBeneficialOwnerRequest.to_json())

# convert the object into a dict
update_business_beneficial_owner_request_dict = update_business_beneficial_owner_request_instance.to_dict()
# create an instance of UpdateBusinessBeneficialOwnerRequest from a dict
update_business_beneficial_owner_request_from_dict = UpdateBusinessBeneficialOwnerRequest.from_dict(update_business_beneficial_owner_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


