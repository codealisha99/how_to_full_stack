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
}✴️
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
 ~why are we even using cntext API ?
 ans:---
  1)include it from the react framework 
  2)declare it above everything to make it global
  3)wrap the common ancestor with the <bulbcontext.provider value={{it should  contain the argument or the props}}> function <bulbcontext.provider/>   it should be the PROVIDER OF THE VALUES TO ALL THE FURTHER FUNCTIONS
  4) then use it on the individual function by const {the prop it needs} = usecontext(bulbcontext);        



                                  ##make a separate provider like a pantry so it clears the kitchen area and then zikr krdo in the kitchen or in the main code## separate providing logic                  
 creating providers!!!!!!!!!!!!!!!!             



                                            ####custom hooks

🪃

♟ useState => Store a state variable, re-render a component when the variable changes
✓ useEffect => Run an effect whenever a dependency changes                                                             ✅



######how to mmake a custom hoook:-
1)custom hook and component
2) if u use a hook inside a function it itself is a hook (function)
3)but why is it called a custom hook?
4) the custom hook will get an argument 







$$$what i understood was that v r benefitting from the sequence of the code render which is 
A}console.log(hiii)


B}useeffect(console.log(in middle but renders at last ))


C}console.log(runs in the middle )


in the above case scenario the a>c>b runs to while we use the useref in A [const ref= useRef()] which defines what is ahppening and then the c renders [ref.current] which explains that the ref.current still has the old value 

and now the B [ref.current = value , [value] with the dependency variable as the value] renders where the value is changing so the prev value gets changed at the very last of the code.
$$$$$$




useDebounce