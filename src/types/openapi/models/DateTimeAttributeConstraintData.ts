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

/**
 * DateTime Range Attribute Constraint Data
 * @export
 * @interface DateTimeAttributeConstraintData
 */
export interface DateTimeAttributeConstraintData {
    /**
     * Start of the datetime for validation
     * @type {string}
     * @memberof DateTimeAttributeConstraintData
     */
    from?: string;
    /**
     * End of the datetime for validation
     * @type {string}
     * @memberof DateTimeAttributeConstraintData
     */
    to?: string;
}
