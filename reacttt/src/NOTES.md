                                         #useRef 
it is used when there is an error in the form filling and it takes to the exact place where the error is that hwere the useRef is working under the hood.
we can do that by document.getelementbyId(").focus but it is a very rudimentary method.

to apply useref
1)put the attribute in the tag ref={reftcon}
2)declare the let reftcon = useREF(); {ref in the arritute is calling this reftcon}
3)then useRef.current.focus 



                          #why do we declare the function outside the return?
because return() is JSX, not normal JavaScript.
React’s return() is only meant to describe what the UI looks like —
it’s not where you should write logic or behavior.

----------------------------------------------------------------




                           #<route path="*" element={<error page/>}> />

link only inside the browserroute 



                           #<link to=""></link> is the syntax on spa




                           #useNavigate 
function Class12Program() {
const navigate = useNavigate();
function redirectUser() {
navigate("/
}
return <d>
NEET programs for Class 12th
<b onClick ={redirectUser}>Go back to landing page</button>
</d>
}
HUMNE YEHH DUSRE PAGE MAI BANAYA HAI JISMAI EK OPTION HAI JO WITHOUT LOAD KIYAI ANDR HII ANDR WAPIS USENAGIVATE YAA LINK SE DUSRE ENDPOINT JAA RAHA HAI
{here navigate is used as a door back to the orginal page} 

                              #argument can be the resources that we that function needs like the oil in the engine. rolling up the state
is like make tunnel links in between the functions


                              #prop drilling ka solution is context API



                              #context API

  1)include it from the react framework 
  2)declare it above everything to make it global
  3)wrap the common ancestor with the <bulbcontext.provider value={{it should  contain the argument or the props}}> function <bulbcontext.provider/>   it should be the PROVIDER OF THE VALUES TO ALL THE FURTHER FUNCTIONS
  4) then use it on the individual function by const {the prop it needs} = usecontext(bulbcontext);        



                                  ##make a separate provider like a pantry so it clears the kitchen area and then zikr krdo in the kitchen or in the main code## separate providing logic                  