# ReturnCheckPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for returning the Check Payment. See valid reasons under the **Valid via Return API?** column. | 

## Example

```python
from unit_finance_sdk.models.return_check_payment_data_attributes import ReturnCheckPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnCheckPaymentDataAttributes from a JSON string
return_check_payment_data_attributes_instance = ReturnCheckPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(ReturnCheckPaymentDataAttributes.to_json())

# convert the object into a dict
return_check_payment_data_attributes_dict = return_check_payment_data_attributes_instance.to_dict()
# create an instance of ReturnCheckPaymentDataAttributes from a dict
return_check_payment_data_attributes_from_dict = ReturnCheckPaymentDataAttributes.from_dict(return_check_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


