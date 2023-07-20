/**
 * 由 src/kubernetes/gen/index.ts 自动生成
 * !!! 请不要修改 !!!
 */
/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * IBPPeer is the Schema for the ibppeers API. Warning: Peer deployment using this tile is not supported. Please use the IBP Console to deploy a Peer.
 */
export interface IBPPeer {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  metadata?: {
    [k: string]: any;
  };
  /**
   * IBPPeerSpec defines the desired state of IBPPeer
   */
  spec?: {
    /**
     * Action (Optional) is object for peer actions
     */
    action?: {
      /**
       * Enroll contains actions for triggering crypto enroll
       */
      enroll?: {
        /**
         * Ecert is used to trigger enroll for ecert
         */
        ecert?: boolean;
        /**
         * TLSCert is used to trigger enroll for tlscert
         */
        tlscert?: boolean;
        [k: string]: any;
      };
      /**
       * Reenroll contains actions for triggering crypto reenroll
       */
      reenroll?: {
        /**
         * Ecert is used to trigger reenroll for ecert
         */
        ecert?: boolean;
        /**
         * EcertNewKey is used to trigger reenroll for ecert and also generating a new private key
         */
        ecertNewKey?: boolean;
        /**
         * TLSCert is used to trigger reenroll for tlscert
         */
        tlscert?: boolean;
        /**
         * TLSCertNewKey is used to trigger reenroll for tlscert and also generating a new private key
         */
        tlscertNewKey?: boolean;
        [k: string]: any;
      };
      /**
       * Restart action is used to restart peer deployment
       */
      restart?: boolean;
      /**
       * UpgradeDBs action is used to trigger peer node upgrade-dbs command
       */
      upgradedbs?: boolean;
      [k: string]: any;
    };
    /**
     * cluster related configs Arch (Optional) is the architecture of the nodes where peer should be deployed
     */
    arch?: string[];
    /**
     * ChaincodeBuilderConfig (Optional) is a k/v map providing a scope for template substitutions defined in chaincode-as-a-service package metadata files. The map will be serialized as JSON and set in the peer deployment CHAINCODE_AS_A_SERVICE_BUILDER_CONFIG env variable.
     */
    chaincodeBuilderConfig?: {
      [k: string]: string;
    };
    /**
     * ConfigOverride (Optional) is the object to provide overrides to core yaml config
     */
    configoverride?: {
      [k: string]: any;
    };
    /**
     * CustomNames (Optional) is to use pre-configured resources for peer's deployment
     */
    customNames?: {
      /**
       * PVC is the list of PVC Names to be used for peer's deployment
       */
      pvc?: {
        /**
         * Peer is the pvc to be used as peer's storage
         */
        peer?: string;
        /**
         * StateDB is the pvc to be used as statedb's storage
         */
        statedb?: string;
        [k: string]: any;
      };
      [k: string]: any;
    };
    /**
     * advanced configs DindArgs (Optional) is used to override args passed to dind container
     */
    dindArgs?: string[];
    /**
     * DisableNodeOU (Optional) is used to switch nodeou on and off
     */
    disablenodeou?: boolean;
    /**
     * proxy ip passed if not OCP, domain for OCP Domain is the sub-domain used for peer's deployment
     */
    domain?: string;
    /**
     * HSM (Optional) is DEPRECATED
     */
    hsm?: {
      /**
       * PKCS11Endpoint is DEPRECATED
       */
      pkcs11endpoint?: string;
      [k: string]: any;
    };
    /**
     * ImagePullSecrets (Optional) is the list of ImagePullSecrets to be used for peer's deployment
     */
    imagePullSecrets?: string[];
    /**
     * Images (Optional) lists the images to be used for peer's deployment
     */
    images?: {
      /**
       * BuilderImage is the name of the builder image
       */
      builderImage?: string;
      /**
       * BuilderTag is the tag of the builder image
       */
      builderTag?: string;
      /**
       * CCLauncherImage is the name of the chaincode launcher image
       */
      chaincodeLauncherImage?: string;
      /**
       * CCLauncherTag is the tag of the chaincode launcher image
       */
      chaincodeLauncherTag?: string;
      /**
       * CouchDBImage is the name of the couchdb image
       */
      couchdbImage?: string;
      /**
       * CouchDBTag is the tag of the couchdb image
       */
      couchdbTag?: string;
      /**
       * DindImage is the name of the dind image
       */
      dindImage?: string;
      /**
       * DindTag is the tag of the dind image
       */
      dindTag?: string;
      /**
       * EnrollerImage is the name of the init image for crypto generation
       */
      enrollerImage?: string;
      /**
       * EnrollerTag is the tag of the init image for crypto generation
       */
      enrollerTag?: string;
      /**
       * FileTransferImage is the name of the file transfer image
       */
      fileTransferImage?: string;
      /**
       * FileTransferTag is the tag of the file transfer image
       */
      fileTransferTag?: string;
      /**
       * FluentdImage is the name of the fluentd logger image
       */
      fluentdImage?: string;
      /**
       * FluentdTag is the tag of the fluentd logger image
       */
      fluentdTag?: string;
      /**
       * GoEnvImage is the name of the goenv image
       */
      goEnvImage?: string;
      /**
       * GoEnvTag is the tag of the goenv image
       */
      goEnvTag?: string;
      /**
       * GRPCWebImage is the name of the grpc web proxy image
       */
      grpcwebImage?: string;
      /**
       * GRPCWebTag is the tag of the grpc web proxy image
       */
      grpcwebTag?: string;
      /**
       * HSMImage is the name of the hsm image
       */
      hsmImage?: string;
      /**
       * HSMTag is the tag of the hsm image
       */
      hsmTag?: string;
      /**
       * JavaEnvImage is the name of the javaenv image
       */
      javaEnvImage?: string;
      /**
       * JavaEnvTag is the tag of the javaenv image
       */
      javaEnvTag?: string;
      /**
       * NodeEnvImage is the name of the nodeenv image
       */
      nodeEnvImage?: string;
      /**
       * NodeEnvTag is the tag of the nodeenv image
       */
      nodeEnvTag?: string;
      /**
       * PeerImage is the name of the peer image
       */
      peerImage?: string;
      /**
       * PeerInitImage is the name of the peer init image
       */
      peerInitImage?: string;
      /**
       * PeerInitTag is the tag of the peer init image
       */
      peerInitTag?: string;
      /**
       * PeerTag is the tag of the peer image
       */
      peerTag?: string;
      [k: string]: any;
    };
    /**
     * Ingress (Optional) is ingress object for ingress overrides
     */
    ingress?: {
      /**
       * Class (Optional) is the class to set for ingress
       */
      class?: string;
      /**
       * TlsSecretName (Optional) is the secret name to be used for tls certificates
       */
      tlsSecretName?: string;
      [k: string]: any;
    };
    /**
     * License should be accepted by the user to be able to setup Peer
     */
    license: {
      /**
       * Accept should be set to true to accept the license.
       */
      accept?: true;
      [k: string]: any;
    };
    /**
     * peer specific configs MSPID is the msp id of the peer
     */
    mspID?: string;
    /**
     * msp data can be passed in secret on in spec MSPSecret (Optional) is secret used to store msp crypto
     */
    mspSecret?: string;
    /**
     * NumSecondsWarningPeriod (Optional - default 30 days) is used to define certificate expiry warning period.
     */
    numSecondsWarningPeriod?: number;
    /**
     * PeerExternalEndpoint (Optional) is used to override peer external endpoint
     */
    peerExternalEndpoint?: string;
    /**
     * Region (Optional) is the region of the nodes where the peer should be deployed
     */
    region?: string;
    /**
     * RegistryURL is registry url used to pull images
     */
    registryURL?: string;
    /**
     * Replicas (Optional - default 1) is the number of peer replicas to be setup
     */
    replicas?: number;
    /**
     * Resources (Optional) is the amount of resources to be provided to peer deployment
     */
    resources?: {
      /**
       * CCLauncher (Optional) is the resources provided to the cclauncher container
       */
      chaincodelauncher?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: any;
      };
      /**
       * CouchDB (Optional) is the resources provided to the couchdb container
       */
      couchdb?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: any;
      };
      /**
       * DinD (Optional) is the resources provided to the dind container
       */
      dind?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: any;
      };
      /**
       * Enroller (Optional) is the resources provided to the enroller container
       */
      enroller?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: any;
      };
      /**
       * FluentD (Optional) is the resources provided to the fluentd container
       */
      fluentd?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: any;
      };
      /**
       * HSMDaemon (Optional) is the resources provided to the HSM Daemon container
       */
      hsmdaemon?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: any;
      };
      /**
       * Init (Optional) is the resources provided to the init container
       */
      init?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: any;
      };
      /**
       * / Peer (Optional) is the resources provided to the peer container
       */
      peer?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: any;
      };
      /**
       * GRPCProxy (Optional) is the resources provided to the proxy container
       */
      proxy?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: any;
      };
      [k: string]: any;
    };
    /**
     * Secret is object for msp crypto
     */
    secret?: {
      /**
       * Enrollment defines enrollment part of secret spec
       */
      enrollment?: {
        /**
         * ClientAuth contains client uath enrollment details
         */
        clientauth?: {
          /**
           * AdminCerts is the base64 encoded admincerts
           */
          admincerts?: string[];
          /**
           * CAHost is host part of the CA to use
           */
          cahost?: string;
          /**
           * CAName is name of CA
           */
          caname?: string;
          /**
           * CAPort is port of the CA to use
           */
          caport?: string;
          /**
           * CATLS is tls details to talk to CA endpoint
           */
          catls?: {
            /**
             * CACert is the base64 encoded certificate
             */
            cacert?: string;
            [k: string]: any;
          };
          /**
           * CSR is the CSR override object
           */
          csr?: {
            /**
             * Hosts override for CSR
             */
            hosts?: string[];
            [k: string]: any;
          };
          /**
           * EnrollID is the enrollment username
           */
          enrollid?: string;
          /**
           * EnrollSecret is enrollment secret ( password )
           */
          enrollsecret?: string;
          enrolltoken?: string;
          /**
           * IAM auth information. Generally speaking, it is the organization's admin
           */
          enrolluser?: string;
          [k: string]: any;
        };
        /**
         * Component contains ecert enrollment details
         */
        component?: {
          /**
           * AdminCerts is the base64 encoded admincerts
           */
          admincerts?: string[];
          /**
           * CAHost is host part of the CA to use
           */
          cahost?: string;
          /**
           * CAName is name of CA
           */
          caname?: string;
          /**
           * CAPort is port of the CA to use
           */
          caport?: string;
          /**
           * CATLS is tls details to talk to CA endpoint
           */
          catls?: {
            /**
             * CACert is the base64 encoded certificate
             */
            cacert?: string;
            [k: string]: any;
          };
          /**
           * CSR is the CSR override object
           */
          csr?: {
            /**
             * Hosts override for CSR
             */
            hosts?: string[];
            [k: string]: any;
          };
          /**
           * EnrollID is the enrollment username
           */
          enrollid?: string;
          /**
           * EnrollSecret is enrollment secret ( password )
           */
          enrollsecret?: string;
          enrolltoken?: string;
          /**
           * IAM auth information. Generally speaking, it is the organization's admin
           */
          enrolluser?: string;
          [k: string]: any;
        };
        /**
         * TLS contains tls enrollment details
         */
        tls?: {
          /**
           * AdminCerts is the base64 encoded admincerts
           */
          admincerts?: string[];
          /**
           * CAHost is host part of the CA to use
           */
          cahost?: string;
          /**
           * CAName is name of CA
           */
          caname?: string;
          /**
           * CAPort is port of the CA to use
           */
          caport?: string;
          /**
           * CATLS is tls details to talk to CA endpoint
           */
          catls?: {
            /**
             * CACert is the base64 encoded certificate
             */
            cacert?: string;
            [k: string]: any;
          };
          /**
           * CSR is the CSR override object
           */
          csr?: {
            /**
             * Hosts override for CSR
             */
            hosts?: string[];
            [k: string]: any;
          };
          /**
           * EnrollID is the enrollment username
           */
          enrollid?: string;
          /**
           * EnrollSecret is enrollment secret ( password )
           */
          enrollsecret?: string;
          enrolltoken?: string;
          /**
           * IAM auth information. Generally speaking, it is the organization's admin
           */
          enrolluser?: string;
          [k: string]: any;
        };
        [k: string]: any;
      };
      /**
       * MSP defines msp part of secret spec
       */
      msp?: {
        /**
         * ClientAuth contains crypto for client auth certs
         */
        clientauth?: {
          /**
           * AdminCerts is base64 encoded admincerts array
           */
          admincerts?: string[];
          /**
           * CACerts is base64 encoded cacerts array
           */
          cacerts?: string[];
          /**
           * IntermediateCerts is base64 encoded intermediate certs array
           */
          intermediatecerts?: string[];
          /**
           * KeyStore is base64 encoded private key
           */
          keystore?: string;
          /**
           * SignCerts is base64 encoded sign cert
           */
          signcerts?: string;
          [k: string]: any;
        };
        /**
         * Component contains crypto for ecerts
         */
        component?: {
          /**
           * AdminCerts is base64 encoded admincerts array
           */
          admincerts?: string[];
          /**
           * CACerts is base64 encoded cacerts array
           */
          cacerts?: string[];
          /**
           * IntermediateCerts is base64 encoded intermediate certs array
           */
          intermediatecerts?: string[];
          /**
           * KeyStore is base64 encoded private key
           */
          keystore?: string;
          /**
           * SignCerts is base64 encoded sign cert
           */
          signcerts?: string;
          [k: string]: any;
        };
        /**
         * TLS contains crypto for tls certs
         */
        tls?: {
          /**
           * AdminCerts is base64 encoded admincerts array
           */
          admincerts?: string[];
          /**
           * CACerts is base64 encoded cacerts array
           */
          cacerts?: string[];
          /**
           * IntermediateCerts is base64 encoded intermediate certs array
           */
          intermediatecerts?: string[];
          /**
           * KeyStore is base64 encoded private key
           */
          keystore?: string;
          /**
           * SignCerts is base64 encoded sign cert
           */
          signcerts?: string;
          [k: string]: any;
        };
        [k: string]: any;
      };
      [k: string]: any;
    };
    /**
     * Service (Optional) is the override object for peer's service
     */
    service?: {
      /**
       * The "type" of the service to be used
       */
      type?: string;
      [k: string]: any;
    };
    /**
     * StateDb (Optional) is the statedb used for peer, can be couchdb or leveldb
     */
    stateDb?: string;
    /**
     * Storage (Optional - uses default storageclass if not provided) is the override object for peer's PVC config
     */
    storage?: {
      /**
       * Peer (Optional) is the configuration of the storage of the peer
       */
      peer?: {
        /**
         * Class is the storage class
         */
        class?: string;
        /**
         * Size of storage
         */
        size?: string;
        [k: string]: any;
      };
      /**
       * StateDB (Optional) is the configuration of the storage of the statedb
       */
      statedb?: {
        /**
         * Class is the storage class
         */
        class?: string;
        /**
         * Size of storage
         */
        size?: string;
        [k: string]: any;
      };
      [k: string]: any;
    };
    /**
     * FabricVersion (Optional) is fabric version for the peer
     */
    version: string;
    /**
     * Zone (Optional) is the zone of the nodes where the peer should be deployed
     */
    zone?: string;
    [k: string]: any;
  };
  /**
   * IBPPeerStatus defines the observed state of IBPPeer
   */
  status?: {
    /**
     * ErrorCode is the code of classification of errors
     */
    errorcode?: number;
    /**
     * LastHeartbeatTime is when the controller reconciled this component
     */
    lastHeartbeatTime?: string;
    /**
     * Message provides a message for the status to be shown to customer
     */
    message?: string;
    /**
     * Reason provides a reason for an error
     */
    reason?: string;
    /**
     * Status is defined based on the current status of the component
     */
    status?: string;
    /**
     * Type is true or false based on if status is valid
     */
    type?: string;
    /**
     * Version is the product (IBP) version of the component
     */
    version?: string;
    /**
     * Versions is the operand version of the component
     */
    versions?: {
      /**
       * Reconciled provides the reconciled version of the operand
       */
      reconciled: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
  [k: string]: any;
}
