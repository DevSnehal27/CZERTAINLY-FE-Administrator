// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: info@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    CertificateType,
    ResponseAttributeDto,
} from './';

/**
 * Rules associated
 * @export
 * @interface ComplianceRulesDto
 */
export interface ComplianceRulesDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof ComplianceRulesDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof ComplianceRulesDto
     */
    name: string;
    /**
     * Description of the rule
     * @type {string}
     * @memberof ComplianceRulesDto
     */
    description?: string;
    /**
     * @type {CertificateType}
     * @memberof ComplianceRulesDto
     */
    certificateType: CertificateType;
    /**
     * Attributes of the rule
     * @type {Array<ResponseAttributeDto>}
     * @memberof ComplianceRulesDto
     */
    attributes?: Array<ResponseAttributeDto>;
}


