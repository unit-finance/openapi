# ReceivableAttributesTotalPrincipal

JSON Object holding the original principal of the receivable that needs to be repaid, as value (Integer, cents).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **int** | The original principal of the receivable, in cents. | [optional] 

## Example

```python
from unit_finance_sdk.models.receivable_attributes_total_principal import ReceivableAttributesTotalPrincipal

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivableAttributesTotalPrincipal from a JSON string
receivable_attributes_total_principal_instance = ReceivableAttributesTotalPrincipal.from_json(json)
# print the JSON string representation of the object
print(ReceivableAttributesTotalPrincipal.to_json())

# convert the object into a dict
receivable_attributes_total_principal_dict = receivable_attributes_total_principal_instance.to_dict()
# create an instance of ReceivableAttributesTotalPrincipal from a dict
receivable_attributes_total_principal_from_dict = ReceivableAttributesTotalPrincipal.from_dict(receivable_attributes_total_principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


