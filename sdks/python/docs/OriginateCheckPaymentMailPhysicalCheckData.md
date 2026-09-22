# OriginateCheckPaymentMailPhysicalCheckData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**OriginateCheckPaymentMailPhysicalCheckDataAttributes**](OriginateCheckPaymentMailPhysicalCheckDataAttributes.md) |  | 
**relationships** | [**OriginateCheckPaymentMailPhysicalCheckDataRelationships**](OriginateCheckPaymentMailPhysicalCheckDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.originate_check_payment_mail_physical_check_data import OriginateCheckPaymentMailPhysicalCheckData

# TODO update the JSON string below
json = "{}"
# create an instance of OriginateCheckPaymentMailPhysicalCheckData from a JSON string
originate_check_payment_mail_physical_check_data_instance = OriginateCheckPaymentMailPhysicalCheckData.from_json(json)
# print the JSON string representation of the object
print(OriginateCheckPaymentMailPhysicalCheckData.to_json())

# convert the object into a dict
originate_check_payment_mail_physical_check_data_dict = originate_check_payment_mail_physical_check_data_instance.to_dict()
# create an instance of OriginateCheckPaymentMailPhysicalCheckData from a dict
originate_check_payment_mail_physical_check_data_from_dict = OriginateCheckPaymentMailPhysicalCheckData.from_dict(originate_check_payment_mail_physical_check_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


