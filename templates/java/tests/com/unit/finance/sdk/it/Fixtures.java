package com.unit.finance.sdk.it;

import com.unit.finance.sdk.model.Address;
import com.unit.finance.sdk.model.AnnualIncome;
import com.unit.finance.sdk.model.BeneficialOwnerRequest;
import com.unit.finance.sdk.model.BusinessAnnualRevenue;
import com.unit.finance.sdk.model.BusinessContact;
import com.unit.finance.sdk.model.BusinessNumberOfEmployees;
import com.unit.finance.sdk.model.BusinessVertical;
import com.unit.finance.sdk.model.CashFlow;
import com.unit.finance.sdk.model.CancelApplicationData;
import com.unit.finance.sdk.model.CancelApplicationDataAttributes;
import com.unit.finance.sdk.model.CancelApplicationRequest;
import com.unit.finance.sdk.model.CheckRegisteredAgentAddressData;
import com.unit.finance.sdk.model.CheckRegisteredAgentAddressDataAttributes;
import com.unit.finance.sdk.model.CheckRegisteredAgentAddressRequest;
import com.unit.finance.sdk.model.CreateBusinessApplicationData;
import com.unit.finance.sdk.model.CreateBusinessApplicationDataAttributes;
import com.unit.finance.sdk.model.CreateBusinessApplicationRequest;
import com.unit.finance.sdk.model.CreateIndividualApplicationData;
import com.unit.finance.sdk.model.CreateIndividualApplicationDataAttributes;
import com.unit.finance.sdk.model.CreateIndividualApplicationRequest;
import com.unit.finance.sdk.model.CreateSoleProprietorApplicationData;
import com.unit.finance.sdk.model.CreateSoleProprietorApplicationDataAttributes;
import com.unit.finance.sdk.model.CreateSoleProprietorApplicationRequest;
import com.unit.finance.sdk.model.FullName;
import com.unit.finance.sdk.model.Occupation;
import com.unit.finance.sdk.model.OfficerRequest;
import com.unit.finance.sdk.model.Phone;
import com.unit.finance.sdk.model.Relationship;
import com.unit.finance.sdk.model.RelationshipData;
import com.unit.finance.sdk.model.ResourceIdentifier;
import com.unit.finance.sdk.model.SoleProprietorAnnualRevenue;
import com.unit.finance.sdk.model.SoleProprietorNumberOfEmployees;
import com.unit.finance.sdk.model.SourceOfIncome;
import com.unit.finance.sdk.model.UpdateApplicationRequest;
import com.unit.finance.sdk.model.UpdateBusinessApplicationData;
import com.unit.finance.sdk.model.UpdateBusinessApplicationDataAttributes;
import com.unit.finance.sdk.model.UpdateBusinessApplicationRequest;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerData;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerDataAttributes;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerDataRelationships;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Request-body builders, mirroring the Node {@code tests/helpers/fixtures.ts}.
 *
 * <p>Nested JSON:API attribute objects (address, phone, fullName, contact,
 * officer, beneficialOwners) are typed model classes because the write schemas
 * reference the shared component types. Only free-form {@code tags} remain a
 * {@code Map<String, Object>}.
 */
final class Fixtures {

  private static final String RUN = ApiSupport.TEST_RUN_ID;

  private Fixtures() {}

  static Map<String, Object> map(Object... keyValues) {
    LinkedHashMap<String, Object> out = new LinkedHashMap<>();
    for (int i = 0; i < keyValues.length; i += 2) {
      out.put((String) keyValues[i], keyValues[i + 1]);
    }
    return out;
  }

  static Address usAddress() {
    return new Address()
        .street("20 Ingram St")
        .city("Forest Hills")
        .state("NY")
        .postalCode("11375")
        .country("US");
  }

  static Phone usPhone() {
    return new Phone().countryCode("1").number("5555555555");
  }

  static FullName fullName() {
    return new FullName().first("Peter").last("Parker");
  }

  static Map<String, Object> baseTags() {
    return map("testRun", RUN);
  }

  static BusinessContact businessContact() {
    return new BusinessContact()
        .fullName(fullName())
        .email("peter+" + RUN + "@oscorp.com")
        .phone(usPhone());
  }

  static OfficerRequest officer() {
    return new OfficerRequest()
        .fullName(fullName())
        .dateOfBirth("2001-08-15")
        .title("CEO")
        .ssn("721074426")
        .email("peter+" + RUN + "@oscorp.com")
        .phone(usPhone())
        .address(usAddress());
  }

  static List<BeneficialOwnerRequest> beneficialOwners() {
    List<BeneficialOwnerRequest> owners = new ArrayList<>();
    owners.add(
        new BeneficialOwnerRequest()
            .fullName(new FullName().first("Mary Jane").last("Watson"))
            .dateOfBirth("2001-08-15")
            .ssn("574567625")
            .email("mj+" + RUN + "@oscorp.com")
            .phone(usPhone())
            .address(usAddress())
            .percentage(60));
    return owners;
  }

  static CreateBusinessApplicationRequest businessApplicationRequest() {
    CreateBusinessApplicationDataAttributes attributes =
        new CreateBusinessApplicationDataAttributes()
            .name("Pied Piper " + RUN)
            .address(usAddress())
            .phone(usPhone())
            .stateOfIncorporation("DE")
            .ein("123456789")
            .entityType("Corporation")
            .yearOfIncorporation("2020")
            .countriesOfOperation(Arrays.asList("US"))
            .businessVertical(BusinessVertical.TECHNOLOGY_MEDIA_OR_TELECOM)
            .website("https://www.piedpiper.com")
            .contact(businessContact())
            .officer(officer())
            .beneficialOwners(beneficialOwners())
            .annualRevenue(BusinessAnnualRevenue.BETWEEN500K_AND1M)
            .numberOfEmployees(BusinessNumberOfEmployees.BETWEEN50_AND100)
            .cashFlow(CashFlow.PREDICTABLE)
            .tags(baseTags());
    CreateBusinessApplicationData data =
        new CreateBusinessApplicationData()
            .type(CreateBusinessApplicationData.TypeEnum.BUSINESS_APPLICATION)
            .attributes(attributes);
    return new CreateBusinessApplicationRequest().data(data);
  }

  static CreateIndividualApplicationRequest individualApplicationRequest() {
    CreateIndividualApplicationDataAttributes attributes =
        new CreateIndividualApplicationDataAttributes()
            .ssn("721074426")
            .fullName(fullName())
            .dateOfBirth("2001-08-15")
            .address(usAddress())
            .phone(usPhone())
            .email("peter+" + RUN + "@oscorp.com")
            .occupation(Occupation.ARCHITECT_OR_ENGINEER)
            .annualIncome(AnnualIncome.BETWEEN50K_AND100K)
            .sourceOfIncome(SourceOfIncome.EMPLOYMENT_OR_PAYROLL_INCOME)
            .tags(baseTags());
    CreateIndividualApplicationData data =
        new CreateIndividualApplicationData()
            .type(CreateIndividualApplicationData.TypeEnum.INDIVIDUAL_APPLICATION)
            .attributes(attributes);
    return new CreateIndividualApplicationRequest().data(data);
  }

  /**
   * Individual application that the sandbox lands in {@code AwaitingDocuments}
   * (applicant SSN {@code 000000003}), a non-terminal state that can be
   * canceled. Business applications auto-approve in the sandbox even with a
   * magic officer SSN, so the cancel flow exercises an individual applicant.
   */
  static CreateIndividualApplicationRequest cancelableIndividualApplicationRequest() {
    CreateIndividualApplicationRequest request = individualApplicationRequest();
    request.getData().getAttributes().setSsn("000000003");
    return request;
  }

  static CreateSoleProprietorApplicationRequest soleProprietorApplicationRequest() {
    CreateSoleProprietorApplicationDataAttributes attributes =
        new CreateSoleProprietorApplicationDataAttributes()
            .ssn("721074426")
            .fullName(fullName())
            .dateOfBirth("2001-08-15")
            .address(usAddress())
            .phone(usPhone())
            .email("peter+" + RUN + "@oscorp.com")
            .soleProprietorship(true)
            .ein("123456789")
            .dba("Pied Piper SP " + RUN)
            .businessVertical(BusinessVertical.TECHNOLOGY_MEDIA_OR_TELECOM)
            .annualRevenue(SoleProprietorAnnualRevenue.BETWEEN100K_AND200K)
            .numberOfEmployees(SoleProprietorNumberOfEmployees.BETWEEN2_AND5)
            .website("https://www.piedpiper.com")
            .tags(baseTags());
    CreateSoleProprietorApplicationData data =
        new CreateSoleProprietorApplicationData()
            .type(CreateSoleProprietorApplicationData.TypeEnum.INDIVIDUAL_APPLICATION)
            .attributes(attributes);
    return new CreateSoleProprietorApplicationRequest().data(data);
  }

  static UpdateApplicationRequest updateBusinessApplicationRequest() {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateBusinessApplicationDataAttributes attributes =
        new UpdateBusinessApplicationDataAttributes().tags(tags);
    UpdateBusinessApplicationData data =
        new UpdateBusinessApplicationData()
            .type(UpdateBusinessApplicationData.TypeEnum.BUSINESS_APPLICATION)
            .attributes(attributes);
    return new UpdateApplicationRequest(new UpdateBusinessApplicationRequest().data(data));
  }

  static UpdateBusinessBeneficialOwnerRequest updateBusinessBeneficialOwnerRequest(
      String applicationId) {
    UpdateBusinessBeneficialOwnerDataAttributes attributes =
        new UpdateBusinessBeneficialOwnerDataAttributes().occupation(Occupation.ARCHITECT_OR_ENGINEER);
    UpdateBusinessBeneficialOwnerDataRelationships relationships =
        new UpdateBusinessBeneficialOwnerDataRelationships()
            .application(
                new Relationship()
                    .data(
                        new RelationshipData(
                            new ResourceIdentifier()
                                .type("businessApplication")
                                .id(applicationId))));
    UpdateBusinessBeneficialOwnerData data =
        new UpdateBusinessBeneficialOwnerData()
            .type(UpdateBusinessBeneficialOwnerData.TypeEnum.BENEFICIAL_OWNER)
            .attributes(attributes)
            .relationships(relationships);
    return new UpdateBusinessBeneficialOwnerRequest().data(data);
  }

  static CancelApplicationRequest cancelApplicationRequest() {
    CancelApplicationDataAttributes attributes =
        new CancelApplicationDataAttributes().reason("By user request via SDK integration test");
    CancelApplicationData data =
        new CancelApplicationData()
            .type(CancelApplicationData.TypeEnum.APPLICATION_CANCEL)
            .attributes(attributes);
    return new CancelApplicationRequest().data(data);
  }

  static CheckRegisteredAgentAddressRequest checkRegisteredAgentAddressRequest() {
    CheckRegisteredAgentAddressDataAttributes attributes =
        new CheckRegisteredAgentAddressDataAttributes().address(usAddress());
    CheckRegisteredAgentAddressData data =
        new CheckRegisteredAgentAddressData()
            .type(CheckRegisteredAgentAddressData.TypeEnum.CHECK_REGISTERED_AGENT_ADDRESS)
            .attributes(attributes);
    return new CheckRegisteredAgentAddressRequest().data(data);
  }
}
