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

