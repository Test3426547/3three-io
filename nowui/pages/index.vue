<template>
    <div class="wrapper landing-page">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                 style="background-image: url('img/bg26.jpg')">
            </div>
            <div class="content-center">
                <h1 class="title">Web Hosting, Design & Development Made Easy.</h1>
                <div class="text-center">
                    <a href="#pablo" class="btn btn-success btn-icon  btn-round">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="#pablo" class="btn btn-success btn-icon btn-round">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#pablo" class="btn btn-success btn-icon btn-round">
                        <i class="fab fa-google-plus"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="section section-about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Who we are?</h2>
                        <h5 class="description">3three.io is a Sydney-based Web Agency that specializes
                            in Hosting, Design and Development services. Our hosting comprises 3 different
                            hosting plans, WordPress hosting and numerous VPS hosting plans. We design websites
                            from scratch using Bootstrap, JavaScript and PHP, we are also experts in CMS such as
                            Shopify and WordPress. We develop custom business application to create any solution.
                        </h5>
                    </div>
                </div>
                <div class="separator separator-success"></div>
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-6">
                            <!-- First image on the left side -->
                            <div class="image-container image-left" style="background-image: url('img/bg38.jpg')">
                                <p class="blockquote blockquote-primary">"The products and services offered by 3three.io 
                                    are highly variable and cover a wide range of core web services required for
                                    hosting websites and web applications"
                                    <br>
                                    <br>
                                    <small>-System Administrator</small>
                                </p>
                            </div>
                            <!-- Second image on the left side of the article -->
                            <div class="image-container image-left-bottom"
                                 style="background-image: url('img/bg24.jpg')"></div>
                        </div>
                        <div class="col-md-5">
                            <!-- First image on the right side, above the article -->
                            <div class="image-container image-right"
                                 style="background-image: url('img/bg39.jpg')"></div>
                            <h3>A powerful trio in Hosting, Design and Development</h3>
                            <p>Our Web Hosting is the Bread & Butter of our product offerings, we offer 3 types of
                                subscriptions and we even offer dedicated WordPress hosting. Our web hosting extends
                                as far as VPS for a completely isolated development environment for any business to 
                                provide a wide variety of solution. Experience the true power of web hosting with us.
                            </p>
                            <p>
                                The Web Design work we offer is Custom and CMS Created, we pride ourselves in building
                                both custom coded websites and landing pages uses the latest stacks as well as traditional 
                                full stacks. We specialize in both LEMP and NLB Stacks which provide a range of design 
                                options. We are highly experienced in CMS and can build on Shopify and WordPress.
                            </p>
                            <p>Web Development services are Streamlined for Business Solutions, we analyze your business and 
                                tailor the solution to your business. We can code such solutions as custom scripts or virtual
                                assistants for your website just as an example. We provide out of the box solutions with modern
                                technologies such as Cloud Functions and Serverless Infrastructure for optimal deployment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="features-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h2 class="title">Cloud. VPN. Ticketing.</h2>
                        <h4 class="description">We offer fantastic supplementary services for supporting our primary good and services.
                            We provide all around service synergy to make us the one stop shop for everything web services.</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="info info-hover">
                            <div class="icon icon-success icon-circle">
                                <i class="now-ui-icons objects_globe"></i>
                            </div>
                            <h4 class="info-title">NextCloud Hub</h4>
                            <p class="description">One of the best enterprise ready private cloud hubs on the market.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info info-hover">
                            <div class="icon icon-info icon-circle">
                                <i class="now-ui-icons education_atom"></i>
                            </div>
                            <h4 class="info-title">WireGuard VPN</h4>
                            <p class="description">An enterprise ready VPN like no other. Experience all your devices on the same IP.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info info-hover">
                            <div class="icon icon-success icon-circle">
                                <i class="now-ui-icons tech_watch-time"></i>
                            </div>
                            <h4 class="info-title">Ticketing Systems</h4>
                            <p class="description">From UVdesk to Zammad and many more we offer ticketing systems for customer enquiries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pricing-2">
            <div class="pricing-2" id="pricing-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ml-auto mr-auto text-center">
                            <h2 class="title">Explore our hosting plans</h2>
                            <tabs pills type="success" centered>
                                <tab-pane label="Business"></tab-pane>
                                <tab-pane label="Individual"></tab-pane>
                            </tabs>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <card type="pricing" plain>
                                <h6 class="category">Basic</h6>
                                <h1 class="card-title">
                                    <small>$</small>
                                    15
                                </h1>
                                <ul>
                                    <li>
                                        <b>1GB</b> Cloud Storage
                                    </li>
                                    <li>
                                        <b>Unlimited</b> Monthly Bandwidth
                                    </li>
                                    <li>
                                        <b>1</b> User Account
                                    </li>
                                    <li>
                                        <b>Free</b> SSL Certificate
                                    </li>
                                </ul>
                                <n-button type="success" round>
                                    Buy Now
                                </n-button>
                            </card>
                        </div>
                        <div class="col-md-4">
                            <card type="pricing"
                                  raised
                                  class="card-background"
                                  style="background-image: url('img/pricing2.jpg')">

                                <h6 class="category text-info">Premium</h6>
                                <h1 class="card-title">
                                    <small>$</small>
                                    25
                                </h1>
                                <ul>
                                    <li>
                                        <b>5GB</b> Cloud Storage
                                    </li>
                                    <li>
                                        <b>Unlimited</b> Monthly Bandwidth
                                    </li>
                                    <li>
                                        <b>1</b> User Account
                                    </li>
                                    <li>
                                        <b>Free</b> SSL Certificate
                                    </li>
                                </ul>
                                <n-button class="btn-neutral" round>
                                    Buy Now
                                </n-button>

                            </card>
                        </div>
                        <div class="col-md-4">
                            <card type="pricing" plain>

                                <h6 class="category">Enterprise</h6>
                                <h1 class="card-title">
                                    <small>$</small>
                                    70
                                </h1>
                                <ul>
                                    <li>
                                        <b>10GB</b> Cloud Storage
                                    </li>
                                    <li>
                                        <b>Unlimited</b> Monthly Bandwidth
                                    </li>
                                    <li>
                                        <b>5</b> User Accounts
                                    </li>
                                    <li>
                                        <b>Free</b> SSL Certificate
                                    </li>
                                </ul>
                                <a href="#pablo" class="btn btn-success btn-round">
                                    Buy Now
                                </a>

                            </card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section-contact-us text-center">
            <div class="container">
                <h2 class="title">Questions or Queries?</h2>
                <p class="description">We are happy to compete for your business.</p>
                <div class="row">
                    <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
                        <fg-input
                                class="input-lg"
                                placeholder="First Name..."
                                v-model="form.firstName"
                                addon-left-icon="now-ui-icons users_circle-08">
                        </fg-input>
                        <fg-input
                                class="input-lg"
                                placeholder="Email Here..."
                                v-model="form.email"
                                addon-left-icon="now-ui-icons ui-1_email-85">
                        </fg-input>
                        <div class="textarea-container">
                            <textarea class="form-control"
                                      name="name" rows="4" cols="80"
                                      v-model="form.message"
                                      placeholder="Type a message..."></textarea>
                        </div>
                        <div class="send-button">
                            <n-button type="success" round block size="lg">Send Message</n-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { Card, Button, FormGroupInput, Tabs, TabPane } from '@/components';
  import initParallax from '@/utils/initParallax'
  export default {
    name: 'index',
    layout: 'white-nav',
    components: {
      Card,
      Tabs,
      TabPane,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput
    },
    data() {
      return {
        form: {
          firstName: '',
          email: '',
          message: ''
        }
      }
    },
    mounted() {
      initParallax()
    }
  }
</script>
<style>
</style>
