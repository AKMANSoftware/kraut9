import TermsPrivacyComponent from "../components/TermsPrivacyComponent";
import Layout from "../components/layout";


export default function TermsPage() {
    return (
        <Layout>
            <div className="max-w-screen-xl mx-auto space-y-[60px] py-[180px]">
                <div className="items-center mx-auto">
                    <h1 className="font-extrabold text-5xl">
                        Terms of service
                    </h1>
                </div>

                {/* use of **TermsPrivacyComponent** */}
                <div className="flex flex-col space-y-12">
                    <TermsPrivacyComponent
                        heading=""
                        content={
                            <>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dn ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.
                                <br /><br />
                                Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                <br /><br />
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                <br /><br />
                                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                <br /><br />
                                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                            </>
                        }
                    />
                    <TermsPrivacyComponent
                        heading="Sensitive Information"
                        content={
                            <>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                <br /><br />
                                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                            </>
                        }
                    />
                    <TermsPrivacyComponent
                        heading="Third Parties"
                        content={
                            <>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                                <br /><br />
                                Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            </>
                        }
                    />
                    <TermsPrivacyComponent
                        heading="Disclosure of Personal Information"
                        content={
                            <>
                                Sed consectetur sit amet turpis ac efficitur. Cras eu turpis fringilla urna consectetur lobortis eu vitae mauris. ent erat est, facilisis ac velit at, finibus vulputate sem. Ut imperdiet consectetur luctus. Ut in facilisis enim, vitae lobortis mi. Proin consectetur tortor ac dui imperdiet, molestie ornare tortor sagittis. Duis vitae volutpat sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                <br /><br />
                                Aliquam condimentum lobortis laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Etiam scelerisque mi at volutpat maximus. In hac habitasse platea dictumst. Maecenas vitae facilisis orci, sed egestas justo. Proin dictum volutpat molesti
                            </>
                        }
                    />

                </div>
            </div>
        </Layout>
    )
}