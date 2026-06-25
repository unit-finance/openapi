# BeneficialOwner

`BeneficialOwner` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BeneficialOwnerAttributes**](BeneficialOwnerAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.beneficial_owner import BeneficialOwner

# TODO update the JSON string below
json = "{}"
# create an instance of BeneficialOwner from a JSON string
beneficial_owner_instance = BeneficialOwner.from_json(json)
# print the JSON string representation of the object
print(BeneficialOwner.to_json())

# convert the object into a dict
beneficial_owner_dict = beneficial_owner_instance.to_dict()
# create an instance of BeneficialOwner from a dict
beneficial_owner_from_dict = BeneficialOwner.from_dict(beneficial_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


