# HealthcareAmountsType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dental_amount** | **int** | Dental expense (cents). | 
**transit_amount** | **int** | Transit expense (cents). | 
**vision_optical_amount** | **int** | Vision expense (cents). | 
**prescription_rx_amount** | **int** | Prescription drugs expense (cents). | 
**clinic_other_qualified_medical_amount** | **int** | Misc medical expense (cents). | 
**total_healthcare_amount** | **int** | Total medical expense (cents). | 

## Example

```python
from unit_finance_sdk.models.healthcare_amounts_type import HealthcareAmountsType

# TODO update the JSON string below
json = "{}"
# create an instance of HealthcareAmountsType from a JSON string
healthcare_amounts_type_instance = HealthcareAmountsType.from_json(json)
# print the JSON string representation of the object
print(HealthcareAmountsType.to_json())

# convert the object into a dict
healthcare_amounts_type_dict = healthcare_amounts_type_instance.to_dict()
# create an instance of HealthcareAmountsType from a dict
healthcare_amounts_type_from_dict = HealthcareAmountsType.from_dict(healthcare_amounts_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


